import fetch from 'node-fetch';

const sites = ['https://maartendev.me', 'https://jobs.maartendev.me/'];

const checkForHttpOk = async (uri) => {
    const response = await fetch(uri);
    return {uri, isOk: response.status === 200};
};

const showResultForAllSites = (pendingSiteStatuses) => {
    Promise.all(pendingSiteStatuses).then(sites => {
        sites.forEach(site => {
            const {uri, isOk} = site;
            const statusEmoij = isOk ? '✅' : '❌';

            console.log(`${statusEmoij}  ${uri}`);
        });
    });
}

export default () => {
    const allSiteStatuses = sites.map(site => checkForHttpOk(site));

    return showResultForAllSites(allSiteStatuses);
};

