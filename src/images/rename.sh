#!/bin/bash

prefix="images_"
expr="search_term"

usage()
{
  echo "Usage: $0 -e search_expression -p replacement_prefix [-v]"
  echo "  -e search_expression    specify an expression to match"
  echo "  -p replacement_prefix   specify the prefix to rename all matches"
  echo "  -v                      enable verbose"
  echo "  -r                      run command, otherwise just view"
  exit 2
}

prefix_flag=0
expression_flag=0
run_flag=0
verbose_flag=0 # for verbose mode 
while getopts ":p:e:vr" opt; do
  case ${opt} in
    p)
      prefix=$OPTARG
      prefix_flag=1
      ;;
    e)
      expr="$OPTARG*"
      expression_flag=1
      ;;
    v)
      verbose_flag=1
      ;;
    r)
      run_flag=1
      ;;
    \? )
      echo "Invalid option: $OPTARG" 1>&2
      exit 1
      ;;
    : )
      echo "Invalid option: $OPTARG requires an argument" 1>&2
      exit 1
      ;;
  esac
done
[[ $verbose_flag == 1 ]] && echo prefix_flag: $prefix_flag && echo expression_flag: $expression_flag
if [[ ( $prefix_flag != 1 ) || ( $expression_flag != 1 )  ]]; 
then
  usage
fi

# verbose mode
[[ $verbose_flag == 1 ]] && echo "\tsearch_expression: $expr" && echo "\treplacement_prefix: $prefix"


# [[ !expression_flag || !prefix_flag ]] && usage 


# set envrionment and constants
src_folder=./


echo "all files matching $expr are being renamed to prefix $prefix"


# match files using expression
cmd_match="ls $expr"
echo "cmd: $cmd_match"
files_out=$(eval "$cmd_match")
echo "file(s) to remove..."
echo "----------------------"
echo "$files_out"
echo "----------------------"

# paste example source:
# https://unix.stackexchange.com/questions/114244/replace-all-newlines-to-space-except-the-last
files_single_line=$(eval "echo '$files_out' | paste -s -d ' ' -")
 
# actual move command
i=0
# get user confirmation
while read -n1 -r -p "choose [y]es|[n]o: "; do
  i+=1
  case $REPLY in
    y) 
      echo "printing files"
      i=0
      for x in $files_out
      do
        echo $x
        # get extension from file
        extension_anycase=${x##*.}
        extension=${extension_anycase:l}
        
        [[ $verbose_flag == 1 ]] && echo extension: $extension

        # append extension to new file name
        new_file_name="$prefix$i.$extension"
        echo new_file_name $new_file_name        
        
        # show command to be executed
        cmd_move="mv $x $new_file_name"
        echo $cmd_move

        # execute only if in run mode
        [[ $run_flag == 1 ]] && eval $cmd_move
        
        ((i+=1))
      done
      exit 0
      ;;
    n|q|"") 
      echo "exiting..."
      exit 1
      ;;
    *) 
      echo "What?";;
  esac
done

