let exploreBtn = document.querySelector('#exploreButton').addEventListener('click', openExplorePane);

function openExplorePane(){
    let explorePane =document.getElementById('explorePane');
    explorePane.style.width = '60vw';
    let sections = document.getElementById('workSections');
    sections.style.visibility = 'visible';
    document.getElementById('iotAuto').addEventListener('click', openIotAutoOverview)
    document.getElementById('_3dprint').addEventListener('click', open3dprintOverview)
    let closeExplore = document.getElementById('closeExplorePane');
    closeExplore.style.visibility = 'visible';

    closeExplore.addEventListener('click', function(){
        explorePane.style.width = '0';
        closeExplore.style.visibility = 'hidden';
        sections.style.visibility = 'hidden';
        sectionOverviewPane.style.width = '0';
        sectionOverview.style.display = 'none';
        document.getElementById('iotAutoOverview').style.display = 'none';;
        document.getElementById('_3dPrintOverview').style.display = 'none';;
        
    });
}
 


function openIotAutoOverview(){
    let sectionOverviewPane = document.getElementById('sectionOverviewPane');
    let sectionOverview = document.getElementById('sectionOverview');
    let iotAutoSection = document.getElementById('iotAutoOverview');
    let _3dprintSection = document.getElementById('_3dPrintOverview');
    sectionOverviewPane.style.width = '40vw';
    sectionOverview.style.display = 'block';
    setTimeout(()=>{
        iotAutoSection.style.display = 'block';
        _3dprintSection.style.display = 'none';
    },100)
    


}

function open3dprintOverview(){
    let sectionOverviewPane = document.getElementById('sectionOverviewPane');
    let _3dprintSection = document.getElementById('_3dPrintOverview');
    let iotAutoSection = document.getElementById('iotAutoOverview');
    sectionOverviewPane.style.width = '40vw';
    sectionOverview.style.display = 'block';
    setTimeout(()=>{
        _3dprintSection.style.display = 'block';
        iotAutoSection.style.display = 'none';
    },100)
    
}