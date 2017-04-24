import fs from 'fs';
import path from 'path';
import process from 'process';

const types = {
    ESLINT: 'eslint',
    NPM: 'npm',
    BABEL: 'babel'
};

export default (templateName) => {
    const fileName = getFileNameForType(templateName);
    const content = getTemplateContentForTemplateFile(fileName);

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
    }else if(type == types.NPM){
        return '.gitignore';
    }else if(type == types.BABEL){
        return '.babelrc';
    }
};

const getTemplateContentForTemplateFile = (fileName) => {
    const templatesDir = path.join(__dirname, '/templates/');

    return fs.readFileSync(`${templatesDir}${fileName}`);
};
