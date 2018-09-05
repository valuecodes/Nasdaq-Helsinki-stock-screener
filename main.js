var filter=document.getElementById('filter');
var itemList = document.getElementById('items');

class Company{
    constructor(name,sector,symbol){
        this.name=name;
        this.sector=sector;
        this.symbol=symbol;
    }
    getSummary(){
        return `${this.name} (${this.symbol}) operates in the ${this.sector} sector`;
    }
}

// Data in JSON Format
let companyData=[
        ["Amer Sports Oyj","AMEAS","Consumer Goods"  ],
        ["Cargotec Oyj","CGCBV","Industrials"  ],
        ["Citycon Oyj","CTY1S","Financials"  ],
        ["DNA Oyj","DNA","Telecommunications"  ],
        ["Elisa Oyj","ELISA","Telecommunications"  ],
        ["Finnair Oyj","FIA1S","Consumer Services"  ],
        ["Fortum Oyj","FORTUM","Utilities"  ],
        ["Fiskars Oyj Abp","FSKRS","Consumer Goods"  ],
        ["Huhtam�ki Oyj","HUH1V","Industrials"  ],
        ["Konecranes Oyj","KCR","Industrials"  ],
        ["Kemira Oyj","KEMIRA","Basic Materials"  ],
        ["Kesko Oyj A","KESKOA","Consumer Services"  ],
        ["Kesko Oyj B","KESKOB","Consumer Services"  ],
        ["KONE Oyj","KNEBV","Industrials"  ],
        ["Kojamo Oyj","KOJAMO","Financials"  ],
        ["Mets� Board Oyj A","METSA","Basic Materials"  ],
        ["Mets� Board Oyj B","METSB","Basic Materials"  ],
        ["Metso Oyj","METSO","Industrials"  ],
        ["Nordea Bank AB FDR","NDA1V","Financials"  ],
        ["Neste Oyj","NESTE","Oil & Gas"  ],
        ["Nokia Oyj","NOKIA","Technology"  ],
        ["Nokian Renkaat Oyj","NRE1V","Consumer Goods"  ],
        ["Orion Oyj A","ORNAV","Health Care"  ],
        ["Orion Oyj B","ORNBV","Health Care"  ],
        ["Outokumpu Oyj","OUT1V","Basic Materials"  ],
        ["Sanoma Oyj","SAA1V","Consumer Services"  ],
        ["Sampo Oyj A","SAMPO","Financials"  ],
        ["SSAB A","SSABAH","Basic Materials"  ],
        ["SSAB B","SSABBH","Basic Materials"  ],
        ["Stora Enso Oyj A","STEAV","Basic Materials"  ],
        ["Stora Enso Oyj R","STERV","Basic Materials"  ],
        ["Telia Company","TELIA1","Telecommunications"  ],
        ["Tieto Oyj","TIETO","Technology"  ],
        ["Terveystalo Oyj","TTALO","Health Care"  ],
        ["UPM-Kymmene Oyj","UPM","Basic Materials"  ],
        ["Uponor Oyj","UPONOR","Industrials"  ],
        ["Valmet Oyj","VALMT","Industrials"  ],
        ["W�rtsil� Oyj Abp","WRT1V","Industrials"  ],
        ["YIT Oyj","YIT","Industrials"  ],
        ["Aktia Bank Abp","AKTIA","Financials"  ],
        ["�landsbanken Abp A","ALBAV","Financials"  ],
        ["�landsbanken Abp B","ALBBV","Financials"  ],
        ["Alma Media Oyj","ALMA","Consumer Services"  ],
        ["Altia Oyj","ALTIA","Consumer Goods"  ],
        ["Aspo Oyj","ASPO","Industrials"  ],
        ["Asiakastieto Group Oyj","ATG1V","Financials"  ],
        ["Atria Oyj A","ATRAV","Consumer Goods"  ],
        ["Basware Oyj","BAS1V","Technology"  ],
        ["Bittium Oyj","BITTI","Technology"  ],
        ["CapMan Oyj","CAPMAN","Financials"  ],
        ["Caverion Oyj","CAV1V","Industrials"  ],
        ["Cramo Oyj","CRA1V","Industrials"  ],
        ["eQ Oyj","EQV1V","Financials"  ],
        ["Evli Pankki Oyj","EVLI","Financials"  ],
        ["F-Secure Oyj","FSC1V","Technology"  ],
        ["HKScan Oyj A","HKSAV","Consumer Goods"  ],
        ["Suomen Hoivatilat Oyj","HOIVA","Financials"  ],
        ["Kamux Oyj","KAMUX","Consumer Services"  ],
        ["Lassila & Tikanoja Oyj","LAT1V","Industrials"  ],
        ["Lehto Group Oyj","LEHTO","Industrials"  ],
        ["Oriola Oyj A","OKDAV","Health Care"  ],
        ["Oriola Oyj B","OKDBV","Health Care"  ],
        ["Olvi Oyj A","OLVAS","Consumer Goods"  ],
        ["Outotec Oyj","OTE1V","Industrials"  ],
        ["Pihlajalinna Oyj","PIHLIS","Health Care"  ],
        ["Ponsse Oyj 1","PON1V","Industrials"  ],
        ["P�yry Oyj","POY1V","Industrials"  ],
        ["Raisio Oyj Vaihto-osake","RAIVV","Consumer Goods"  ],
        ["Rapala VMC Oyj","RAP1V","Consumer Goods"  ],
        ["Revenio Group Oyj","REG1V","Health Care"  ],
        ["Ramirent Oyj","RMR1V","Industrials"  ],
        ["Robit Oyj","ROBIT","Industrials"  ],
        ["Rovio Entertainment Oyj","ROVIO","Consumer Goods"  ],
        ["Scanfil Oyj","SCANFL","Industrials"  ],
        ["SRV Yhti�t Oyj","SRV1V","Industrials"  ],
        ["Stockmann Oyj Abp A","STCAS","Consumer Services"  ],
        ["Stockmann Oyj Abp B","STCBV","Consumer Services"  ],
        ["Suominen Oyj","SUY1V","Consumer Goods"  ],
        ["Taaleri Oyj","TAALA","Financials"  ],
        ["Tikkurila Oyj","TIK1V","Industrials"  ],
        ["Teleste Oyj","TLT1V","Technology"  ],
        ["Tokmanni Group Oyj","TOKMAN","Consumer Services"  ],
        ["Technopolis Oyj","TPS1V","Financials"  ],
        ["Vaisala Oyj A","VAIAS","Industrials"  ],
        ["Viking Line Abp","VIK1V","Consumer Services"  ],
        ["Aspocomp Group Oyj","ACG1V","Industrials"  ],
        ["Afarak Group Oyj","AFAGR","Basic Materials"  ],
        ["Apetit Oyj","APETIT","Consumer Goods"  ],
        ["Biohit Oyj B","BIOBV","Health Care"  ],
        ["Consti Yhti�t Oyj","CONSTI","Industrials"  ],
        ["Componenta Oyj","CTH1V","Industrials"  ],
        ["Digia Oyj","DIGIA","Technology"  ],
        ["Digitalist Group Oyj","DIGIGR","Technology"  ],
        ["Dovre Group Oyj","DOV1V","Industrials"  ],
        ["Efore Oyj","EFO1V","Industrials"  ],
        ["Elecster Oyj A","ELEAV","Industrials"  ],
        ["Endomines","ENDOM","Basic Materials"  ],
        ["Etteplan Oyj","ETTE","Industrials"  ],
        ["Exel Composites Oyj","EXL1V","Industrials"  ],
        ["Glaston Oyj Abp","GLA1V","Industrials"  ],
        ["Harvia Oyj","HARVIA","Consumer Goods"  ],
        ["Honkarakenne Oyj B","HONBS","Consumer Goods"  ],
        ["Incap Oyj","ICP1V","Industrials"  ],
        ["Innofactor Plc","IFA1V","Technology"  ],
        ["Ilkka-Yhtym� Oyj 2","ILK2S","Consumer Services"  ],
        ["Investors House Oyj","INVEST","Financials"  ],
        ["Kesla Oyj A","KELAS","Industrials"  ],
        ["Keskisuomalainen Oyj A","KSLAV","Consumer Services"  ],
        ["Martela Oyj A","MARAS","Consumer Goods"  ],
        ["Marimekko Oyj","MMO1V","Consumer Goods"  ],
        ["Neo Industrial Oyj","NEO1V","Industrials"  ],
        ["Nixu Oyj","NIXU","Technology"  ],
        ["Nurminen Logistics Oyj","NLG1V","Industrials"  ],
        ["Orava Asuntorahasto Oyj","OREIT","Financials"  ],
        ["Kotipizza Group Oyj","PIZZA","Consumer Services"  ],
        ["Pohjois-Karjalan Kirjapaino","PKK1V","Consumer Services"  ],
        ["Panostaja Oyj","PNA1V","Financials"  ],
        ["QPR Software Oyj","QPR1V","Technology"  ],
        ["Qt Group Oyj","QTCOM","Technology"  ],
        ["Raute Oyj A","RAUTE","Industrials"  ],
        ["Restamax Oyj","RESTA","Consumer Services"  ],
        ["Saga Furs Oyj C","SAGCV","Consumer Goods"  ],
        ["Sievi Capital Oyj","SIEVI","Financials"  ],
        ["Siili Solutions Oyj","SIILI","Technology"  ],
        ["Silm�asema Oyj","SILMA","Health Care"  ],
        ["Solteq Oyj","SOLTEQ","Technology"  ],
        ["Soprano Oyj","SOPRA","Technology"  ],
        ["Sotkamo Silver AB","SOSI1","Basic Materials"  ],
        ["SSH Communications Security","SSH1V","Technology"  ],
        ["Tecnotree Oyj","TEM1V","Technology"  ],
        ["Talenom Oyj","TNOM","Industrials"  ],
        ["Trainers� House Oyj","TRH1V","Technology"  ],
        ["Tulikivi Oyj A","TULAV","Industrials"  ],
        ["Plc Uutechnic Group Oyj","UUTEC","Industrials"  ],
        ["Valoe Oyj","VALOE","Industrials"  ],
        ["Wulff-Yhti�t Oyj","WUF1V","Industrials"  ],
        ["Yleiselektroniikka Oyj E","YLEPS","Industrials"  ]
      ];

var company= new Array();
// Adding data to Company Class
for(var i=0;i<companyData.length;i++){
    company.push(new Company(companyData[i][0],companyData[i][2],companyData[i][1]));
}

// Sorting Function
function dynamicSort(property) {
    var sortOrder = 1;
    
    // For sectorCount sort
    if(property=='total'){
        sortOrder=-1;
    }

    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

// Sorting by "name","sector" or "symbol"
function change(type){
    clear();
    company.sort(dynamicSort(type));
    createList();
    changeColor(type);
}

// Change color of the items header
changeColor=(index)=>{
    // First changes all to default color and last changes the color of the current
    document.getElementById("name").style.background = "rgb(161, 141, 141)";
    document.getElementById("sector").style.background = "rgb(161, 141, 141)";
    document.getElementById("symbol").style.background = "rgb(161, 141, 141)";
    document.getElementById(index).style.background = "#f4f4f4";
}



// Creates list elements
function createList(){
    for(var i=0;i<company.length;i++){
    var node = document.getElementById("items");
    var a = document.createElement("div");
    var b = document.createElement("li");   
    var c = document.createElement("li");       
    var companyName = document.createTextNode(company[i].name);    
    var companySector = document.createTextNode(company[i].sector);
    var companySymbol = document.createTextNode(company[i].symbol);
    a.className='list-name';
    b.className='list-group-item center sector';
    c.className='list-group-item symbol';
    node.appendChild(a);
    a.appendChild(companyName);
    a.appendChild(b);
    b.appendChild(companySector);
    a.appendChild(c);
    c.appendChild(companySymbol);
    } 
}

createList();

// Default sort is by name when the site is first opened
change("name");

// Clears the list when list is sorted by another parameter
function clear(){
    var ul = document.getElementById("items");
    while(ul.firstChild) ul.removeChild(ul.firstChild);
}


// Total companies count

var companyCount = document.createTextNode(company.length);
var d = document.createElement("h2");
var headerNode= document.getElementById("totalCount");
d.classList='countNum'
headerNode.appendChild(d);
d.appendChild(companyCount);

// Filter event
filter.addEventListener('keyup',filterItems);

// Filter Items

function filterItems(e){
    // convert text to lowercase
    var text=e.target.value.toLowerCase();
    // Get div
    var items=itemList.getElementsByTagName('div');
    console.log(items);
    // Convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display='grid';
        }else{
            item.style.display='none';
        }
    });

}


// Clock
timer();

function timer(){
    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    var sec = currentTime.getSeconds()
    if (minutes < 10){
        minutes = "0" + minutes
    }   
    if (sec < 10){
        sec = "0" + sec
    }
    var t_str = hours + ":" + minutes + ":" + sec + " ";
    document.getElementById('time_span').innerHTML = t_str;
    setTimeout(timer,1000);
}

// Create sector count
function getSectorCount(){
    let sectorCount= new Array();
    let sectorTotal=[];
    for(var i=0;i<company.length;i++){
        if(sectorCount.includes(company[i].sector)==false){
            sectorCount.push(company[i].sector);
        }
    }

    for(let i=0;i<sectorCount.length;i++){
        let obj={sectorName:sectorCount[i],total:0};
        sectorTotal.push(obj);
    }

    for(let i=0;i<company.length;i++){
        for(let j=0;j<sectorTotal.length;j++){
            if(company[i].sector===sectorTotal[j].sectorName){
                sectorTotal[j].total++;
            }
        }
    }

    return sectorTotal;
}

let sectorTotal=getSectorCount();

function createSectorList(sectorTotal){
    for(var i=0;i<sectorTotal.length;i++){

        var node=document.getElementById('sectorCount');
        var p=document.createElement('p');
        var c=document.createElement('p');
        var text=document.createTextNode(sectorTotal[i].sectorName);
        var textC=document.createTextNode(sectorTotal[i].total);
        node.appendChild(p);
        p.appendChild(text);
        node.appendChild(c);
        c.appendChild(textC);
    }
}
sectorTotal.sort(dynamicSort('total'));
createSectorList(sectorTotal);

// Top bar animation

let open=true;

function openSlideMenu(){
    if(document.getElementById('sectorCount').style.top=='0px'){
        document.getElementById('sectorCount').style.top='-200px';
        document.getElementById('sectorCount').style.height='50px';
        document.getElementById('totalCount').style.top='-100px';

    }else{
        document.getElementById('sectorCount').style.top='0px';
        document.getElementById('sectorCount').style.height='190px';
        document.getElementById('totalCount').style.top='0px';
    }
    
    
}













