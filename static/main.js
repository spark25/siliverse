let exploreBtn = document.querySelector('#exploreButton').addEventListener('click', openExplorePane);

function openExplorePane(){
    let explorePane =document.getElementById('explorePane');
    explorePane.style.transform = 'translateX(0)'
    document.getElementById('iotAuto').addEventListener('click', openIotAutoOverview)
    document.getElementById('_3dprint').addEventListener('click', open3dprintOverview)
    let closeExplore = document.getElementById('closeExplorePane');
    closeExplore.style.visibility = 'visible';
    closeExplore.addEventListener('click', function(){
        explorePane.style.transform = 'translateX(-120%)'
        closeExplore.style.visibility = 'hidden';
        sectionOverviewPane.style.transform = 'translateX(120%)';
    });
}
 


function openIotAutoOverview(){
    let sectionOverviewPane = document.getElementById('sectionOverviewPane');
    let iotAutoSection = document.getElementById('iotAutoOverview');
    let _3dprintSection = document.getElementById('_3dPrintOverview');
    sectionOverviewPane.style.transform = 'translateX(0)';
    iotAutoSection.style.display = 'block';
    _3dprintSection.style.display = 'none';
}

function open3dprintOverview(){
    let sectionOverviewPane = document.getElementById('sectionOverviewPane');
    let _3dprintSection = document.getElementById('_3dPrintOverview');
    let iotAutoSection = document.getElementById('iotAutoOverview');
    sectionOverviewPane.style.transform = 'translateX(0)';
    _3dprintSection.style.display = 'block';
    iotAutoSection.style.display = 'none';   
}