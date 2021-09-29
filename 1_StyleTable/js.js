const 
  atomicNumber = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57/71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89/103','104','105','106','107','108','109','110','111','112','113','114','115','116','117','118','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','89','90','91','92','93','94','95','96','97','98','99','100','101','102','103'],

  element = [
  'H', 'He', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne', 'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar', 'K', 'Ca', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn', 'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr', 'Rb', 'Sr', 'Y', 'Zr', 'Nb', 'Mo', 'Tc', 'Ru', 'Rh', 'Pd', 'Ag', 'Cd', 'In', 'Sn', 'Sb', 'Te', 'I', 'Xe', 'Cs', 'Ba', "<small>鑭系</small>", 'Hf', 'Ta', 'W', 'Re', 'Os', 'Ir', 'Pt', 'Au', 'Hg', 'Tl', 'Pb', 'Bi', 'Po', 'At', 'Rn', 'Fr', 'Ra', "<small>錒系</small>", 'Rf', 'Db', 'Sg', 'Bh', 'Hs', 'Mt', 'Ds', 'Rg', 'Cn', 'Nh', 'Fl', 'Mc', 'Lv', 'Ts', 'Og', 'La', 'Ce', 'Pr', 'Nd', 'Pm', 'Sm', 'Eu', 'Gd', 'Tb', 'Dy', 'Ho', 'Er', 'Tm', 'Yb', 'Lu', 'Ac', 'Th', 'Pa', 'U', 'Np', 'Pu', 'Am', 'Cm', 'Bk', 'Cf', 'Es', 'Fm', 'Md', 'No', 'Lr'
  ],

  elementEn = [
  'Hydrogen','Helium','Lithium','Beryllium','Boron','Carbon','Nitrogen','Oxygen','Fluorine','Neon','Sodium','Magnesium','Aluminum','Silicon','Phosphorus','Sulfur','Chlorine','Argon','Kalium','Calcium','Scandium','Titanium','Vanadium','Chromium','Manganese','Iron','Cobalt','Nickel','Copper','Zinc','Gallium','Germanium','Arsenic','Selenium','Bromine','Krypton','Rubidium','Strontium','Yttrium','Zirconium','Niobium','Molybdenum','Technetium','Ruthenium','Rhodium','Palladium','Silver','Cadmium','Indium','Tin','Antimony','Tellurium','Iodine','Xenon','Cesium','Barium','','Hafnium','Tantalum','Tungsten','Rhenium','Osmium','Iridium','Platinum','Gold','Mercury','Thallium','Lead','Bismuth','Polonium','Astatine','Radon','Francium','Radium','','Rutherfordium','Dubnium','Seaborgium','Bohrium','Hassium','Meitnerium','Darmstadtium','Roentgenium','Copernicium','Nihonium','Flerovium','Moscovium','Livermorium','Tennessine','Oganesson','Lanthanum','Cerium','Praseodymium','Neodymium','Promethium','Samarium','Europium','Gadolinium','Terbium','Dysprosium','Holmium','Erbium','Thulium','Ytterbium','Lutetium','Actinium','Thorium','Protactinium','Uranium','Neptunium','Plutonium','Americium','Curium','Berkelium','Californium','Einsteinium','Fermium','Mendelevium','Nobelium','Lawrencium'],

  elementCh = [
  '氫','氦','鋰','鈹','硼','碳','氮','氧','氟','氖','鈉','鎂','鋁','矽','磷','硫','氯','氬','鉀','鈣','鈧','鈦','釩','鉻','錳','鐵','鈷','鎳','銅','鋅','鎵','鍺','砷','硒','溴','氪','銣','鍶','釔','鋯','鈮','鉬','鎝','釕','銠','鈀','銀','鎘','銦','錫','銻','碲','碘','氙','銫','鋇','','鉿','鉭','鎢','錸','鋨','銥','鉑','金','汞','鉈','鉛','鉍','釙','砈','氡','鍅','鐳','','鑪','𨧀','𨭎','𨨏','𨭆','䥑','鐽','錀','鎶','鉨','鈇','鏌','鉝','石田','鉝','鑭','鈰','鐠','釹','鉕','釤','銪','釓','鋱','鏑','鈥','鉺','銩','鐿','鎦','錒','釷','鏷','鈾','錼','鈽','鋂','鋦','鉳','鉲','鑀','鐨','鍆','鍩','鐒'
  ];

  function cssSwitch(value){
    document.querySelector("link").href = `${value}`;
  }

  let periodicTable = function(){
    
    let innerHtml = "";

    for(let i=1; i<=7; i++){
      innerHtml +=`<tr>`;
        innerHtml +=`<th>${i}</th>`
          for(let j=1; j<=18; j++){
            if(i == 1 || i == 2 || i == 3 ){
              if((i == 1 && j >= 2 && j <= 17) || (i == 2 && j >= 3 && j <= 12) || (i == 3 && j >= 3 && j <= 12)){
                `<td></td>`;
              }else if(i == 1){  
                number0 = j-1;
                innerHtml += `<td>
                <div class="at">${atomicNumber[number0]}</div>
                <div class="ele">${element[number0]}</div>
                <div class="ch">${elementCh[number0]}</div>
                <div class="en">${elementEn[number0]}</div>
                </td>`
              }else if(i == 2){  
                if(j <= 2){
                  number0 = ((i-1)*18)+j-17;
                  innerHtml +=`<td>
                  <div class="at">${atomicNumber[number0]}</div>
                  <div class="ele">${element[number0]}</div>
                  <div class="ch">${elementCh[number0]}</div>
                  <div class="en">${elementEn[number0]}</div>
                  </td>`;
                }else{
                  number0 = ((i-1)*18)+j-27;
                  innerHtml +=`<td>
                  <div class="at">${atomicNumber[number0]}</div>
                  <div class="ele">${element[number0]}</div>
                  <div class="ch">${elementCh[number0]}</div>
                  <div class="en">${elementEn[number0]}</div>
                  </td>`;
                }
              }else if(i == 3){  
                if(j <= 2){
                  number0 = ((i-1)*18)+j-27;
                  innerHtml +=`<td>
                  <div class="at">${atomicNumber[number0]}</div>
                  <div class="ele">${element[number0]}</div>
                  <div class="ch">${elementCh[number0]}</div>
                  <div class="en">${elementEn[number0]}</div>
                  </td>`;
                }else{
                  number0 = ((i-1)*18)+j-37;
                  innerHtml +=`<td>
                  <div class="at">${atomicNumber[number0]}</div>
                  <div class="ele">${element[number0]}</div>
                  <div class="ch">${elementCh[number0]}</div>
                  <div class="en">${elementEn[number0]}</div>
                  </td>`;
                }
              }
            }else{
              number1 = ((i-1)*18)+j-37;
              innerHtml +=`<td>
              <div class="at">${atomicNumber[number1]}</div>
              <div class="ele">${element[number1]}</div>
              <div class="ch">${elementCh[number1]}</div>
              <div class="en">${elementEn[number1]}</div>
              </td>`;
            }
          }
          innerHtml +=`</tr>`
    }
    for(let i=1; i<=2; i++){
      innerHtml +=`<tr>`
      innerHtml +=`<th>${i+7}</th>`
        for(let j=1; j<=18; j++){
          if(j >= 1 && j <= 2){
            innerHtml +=`<td></td>`;
          }else if(j == 18){
            innerHtml +=`<td></td>`;
          }else{
            number2 = 90+((i-1)*18)+j-(i*3);
            if(i == 1){
              innerHtml +=`<td class="la">
              <div class="at">${atomicNumber[number2]}</div>
              <div class="ele">${element[number2]}</div>
              <div class="ch">${elementCh[number2]}</div>
              <div class="en">${elementEn[number2]}</div>
              </td>`;
            }else{
              innerHtml +=`<td class="aa">
              <div class="at">${atomicNumber[number2]}</div>
              <div class="ele">${element[number2]}</div>
              <div class="ch">${elementCh[number2]}</div>
              <div class="en">${elementEn[number2]}</div>
              </td>`;
            }
          }
        }
        innerHtml +=`</tr>`
    }

    $("tbody").append(`${innerHtml}`);

  }