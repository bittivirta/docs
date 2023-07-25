#!/bin/bash

# Color Variables
Reset='\033[0m'           # Text Reset
Red='\033[0;31m'          # Red
Blue='\033[0;34m'         # Blue
Green='\033[0;32m'        # Green
bRed='\033[1;31m'         # Bold Red
bBlue='\033[1;34m'        # Bold Blue
bGreen='\033[1;32m'       # Bold Green

function welcome() {
    echo -e "${bBlue}Welcome to the PNG to WebP Converter!${Reset}"
}

function checkDepedencies() {
    dependencies=("find" "egrep" "parallel" "cwebp")

    for dependency in "${dependencies[@]}"; do
        if ! command -v "$dependency" &> /dev/null; then
            echo "${bRed}Error: ${Red}Dependency ${Reset}$dependency ${Red}could not be found."
            SUCCSS=0
        fi
    done

    if [ $SUCCSS -eq 0 ]; then
        echo -e "${bRed}Error: ${Red}Please install the missing dependencies and try again.${Reset}"
        exit 1
    fi
}

function askWhatToConvert() {
    echo ""
    echo -e "${Blue}Would you like to convert one file or an entire directory recursively?${Reset}"
    echo -e "${bBlue}1)${Blue} Convert one file"
    echo -e "${bBlue}2)${Blue} Convert an entire directory recursively"
    echo -e "${bBlue}3)${Blue} Cancel"
    echo ""
    echo -e "${bBlue}Please enter your choice: ${Reset}"
    read -n 1 CHOICE
}

function convertOne() {
    echo ""
    echo -e "${bBlue}Please enter the path to the file you would like to convert: ${Reset}"
    read FILE_PATH
    if [ ! -f $FILE_PATH ]; then
        echo -e "${bRed}Error: ${Red}File not found. Press ctr+c to exit. Please try again.${Reset}"
        convertOne
    fi
    cwebp -quiet -af $FILE_PATH -o ${FILE_PATH%.*}.webp && rm $FILE_PATH
}

function convertAllInDirectory() {
    echo ""
    echo -e "${bBlue}Please enter the path to the directory you would like to convert: ${Reset}"
    read DIRECTORY_PATH
    cd $DIRECTORY_PATH
    convertAll
}

function convertAll() {
    find . | egrep '.jpeg|.jpg|.tiff|.tif|.png' | parallel --progress 'cwebp -quiet -af {} -o {.}.webp && rm {}' 
}

function main() {
    welcome
    checkDepedencies
    askWhatToConvert
    if [ $CHOICE == 1 ]; then
        convertOne
    elif [ $CHOICE == 2 ]; then
        convertAllInDirectory
    elif [ $CHOICE == 3 ]; then
        exit 0
    else
        echo -e "${bRed}Error: ${Red}Invalid choice. Try again, enter 3 to exit.${Reset}"
        main
    fi
}

echo -e "${Reset}"
main