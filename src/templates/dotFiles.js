import fs from 'fs';
import path from 'path';
import process from 'process';

const types = {
    ESLINT: 'eslint'
};


export default (templateName) => {
    const fileName = getFileNameForType(templateName);
    const content = getTemplateForName(fileName);

    const currentDirectory = process.cwd();

    return createFileFromTemplate(`${currentDirectory}/${fileName}`, content);
};

const createFileFromTemplate = (fileName, content) => {
    fs.writeFile(fileName, content, (err) => {
        if (err) throw err;
        console.log('The template has been created!');
    });
};

const getFileNameForType = (type) => {
    if(type == types.ESLINT){
        return '.eslintrc.js';
    }
};

const getTemplateForName = (fileName) => {
    const templatesDir = path.join(__dirname, '/dotFiles/');

    return fs.readFileSync(`${templatesDir}${fileName}`);
};
