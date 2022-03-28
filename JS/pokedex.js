//Power Button
//Fetch → Consulta a API
const fetchPokemon= function(){
  const pokemonSearch= document.getElementById('pokeName')
  let pokeInput= pokemonSearch.value.toLowerCase();
  const namepk = document.getElementById('pkName')
  const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
  fetch(url).then((res) => {
    if(res.status == 404){
      alert('Escribiste un nombre equivocado')
      throw Error(res.statusText + ' - '+ res.url);
    }
    return res.json();
  }).then((data) =>{
    //Setting Name
    let pokeName=data.forms[0].name;
    namepk.innerHTML= pokeName.toUpperCase();
    //Getting and setting imgs-------------------
    let pkImage_front= data.sprites.front_default;
    let pkImage_back= data.sprites.back_default;
    let pkImage_shiny= data.sprites.front_shiny;
    pokeImageChange_front(pkImage_front,pokeName)
    pokeImageChange_back(pkImage_back,pokeName)
    pokeImageChange_shiny(pkImage_shiny,pokeName)
    //Getting Type & Setting Class---------------
    let pokeType= data.types[0].type.name;
    const getPokeType= document.getElementById('pktype')
    const getPokeType2=document.getElementById('pktype2')
     if (data.types[1]){
      let pokeType2= data.types[1].type.name;
      getPokeType.innerHTML = pokeType
      getPokeType2.innerHTML = pokeType2
      typeStyle('pktype',pokeType)
      typeStyle('pktype2',pokeType2)
    }else{
      getPokeType.innerHTML = pokeType
      getPokeType2.innerHTML=''
      typeStyle('pktype',pokeType)
      typeStyleInit()
    }
    //Getting abilities-----------------------
    let ability1= data.abilities[0].ability.name;
    const getAbID1= document.getElementById('abil_1')
    const getAbID2= document.getElementById('abil_2')     
    if (data.abilities[1]){
      let ability2= data.abilities[1].ability.name;
      getAbID1.innerHTML= ability1
      getAbID2.innerHTML= ability2
      getAbID1.className='ablities_class'
      getAbID2.className='ablities_class'
    }else if(!data.abilities[1]){
      getAbID1.innerHTML= ability1
      getAbID2.innerHTML=' '
      getAbID1.className='ablities_class'
      getAbID2.className='iniType'
    }


    //Getting stats---------------------------
    let pkHP= data.stats[0].base_stat;
    let pkATTK= data.stats[1].base_stat;
    let pkDEF= data.stats[2].base_stat;
    let pkSPATTK= data.stats[3].base_stat;
    let pkSPDEF= data.stats[4].base_stat;
    let pkSPEED= data.stats[5].base_stat;
    hpImageStat(pkHP)
    attkImageStat(pkATTK)
    defImageStat(pkDEF)
    sp_attkImageStat(pkSPATTK)
    sp_defImageStat(pkSPDEF)
    speedImageStat(pkSPEED)
    
  }).catch((err) =>{
    console.log('Error');
    //console.log(err)
  })
}

//COMPLEMENTARY FUNCITONS TO → MAIN FUNCTION
const pokeImageChange_front= function(url,bar_name){
  const getImgId= document.getElementById('frontImage')
  getImgId.src=url
  const getImgBar= document.getElementById('barfront_name')
  getImgBar.innerHTML = bar_name + '.frontview'
}

const pokeImageChange_back= function(url,bar_name){
  const getImgId= document.getElementById('backImage')
  getImgId.src=url
  const getImgBar= document.getElementById('barback_name')
  getImgBar.innerHTML = bar_name + '.backview'
}

const pokeImageChange_shiny= function(url,bar_name){
  const getImgId= document.getElementById('shinyImage')
  getImgId.src=url
  const getImgBar= document.getElementById('shiny_name')
  getImgBar.innerHTML = bar_name + '.shinyV'
}

const typeStyle= function(tpID,pkType){
  let type=document.getElementById(tpID)
  switch (pkType) {
    case 'fire':
    type.className='typeFire'
    break;

    case 'water':
    type.className='typeWater'
    break;

    case 'electric':
    type.className='typeElectric'
    break;

    case 'poison':
    type.className='typePoison'
    break;

    case 'grass':
    type.className='typeGrass'
    break;

    case 'flying':
    type.className='typeFlying'
    break;

    case 'bug':
    type.className='typeBug'
    break;

    case 'ground':
    type.className='typeGround'
    break;

    case 'fairy':
    type.className='typeFairy'
    break;

    case 'electric':
    type.className='typeElectric'
    break;

    case 'psychic':
    type.className='typePsychic'
    break;

    case 'fighting':
    type.className='typeFighting'
    break;

    case 'steel':
    type.className='typeSteel'
    break;

    case 'ice':
    type.className='typeIce'
    break;

    case 'ghost':
    type.className='typeGhost'
    break;

    case 'rock':
    type.className='typeRock'
    break;

    case 'normal':
    type.className='typeNormal'
    break;

    case 'dragon':
    type.className='typeDragon'
    break;

  }
}

const typeStyleInit= function (){
  let type=document.getElementById('pktype2')
  type.className='iniType'
}

const hpImageStat= function (stat){
  const hpImage= document.getElementById('statHP')
  const hpstat=document.getElementById('hpText')
  hpstat.innerHTML='HP - ' + stat
  //Por alguna razón no funciona con switch, así que utilizaré if 
  //FOR HP
  if (stat >= 1 && stat < 10){
    hpImage.src='./Resources/stat_0.png'
  }else if(stat >= 10 && stat <= 19){
    hpImage.src='./Resources/stat_10.png'
  }else if(stat >= 20 && stat <= 29){
    hpImage.src='./Resources/stat_20.png'
  }else if(stat >= 30 && stat <= 39){
    hpImage.src='./Resources/stat_30.png'
  }else if(stat >= 40 && stat <= 49){
    hpImage.src='./Resources/stat_40.png'
  }else if(stat >= 50 && stat <= 59){
    hpImage.src='./Resources/stat_50.png'
  }else if(stat >= 60 && stat <= 69){
    hpImage.src='./Resources/stat_60.png'
  }else if(stat >= 70 && stat <= 79){
    hpImage.src='./Resources/stat_70.png'
  }else if(stat >= 80 && stat <= 89){
    hpImage.src='./Resources/stat_80.png'
  }else if(stat >= 90 && stat <= 99){
    hpImage.src='./Resources/stat_90.png'
  }else if(stat >= 100 && stat <=109){
    hpImage.src='./Resources/stat_100.png'
  }else if(stat >= 110 && stat <= 119){
    hpImage.src='./Resources/stat_110.png'
  }else if(stat >= 120 && stat <= 129){
    hpImage.src='./Resources/stat_120.png'
  }else if(stat >= 130 && stat <= 139){
    hpImage.src='./Resources/stat_130.png'
  }else if(stat >= 140 && stat <= 149){
    hpImage.src='./Resources/stat_140.png'
  }else if(stat >= 150 && stat <= 159){
    hpImage.src='./Resources/stat_150.png'
  }else if(stat >= 160 && stat <= 169){
    hpImage.src='./Resources/stat_160.png'
  }else if(stat >= 170 && stat <= 179){
    hpImage.src='./Resources/stat_170.png'
  }else if(stat >= 180 && stat <= 189){
    hpImage.src='./Resources/stat_180.png'
  }else if(stat >= 190 && stat <= 190){
    hpImage.src='./Resources/stat_190.png'
  }else if(stat >= 200){
    hpImage.src='./Resources/stat_200.png'
  }  
}

const attkImageStat= function(stat){
  const attkImage= document.getElementById('statATTK')
  const attkStat= document.getElementById('attkText')
  attkStat.innerHTML='ATTK - ' + stat

  if (stat >= 1 && stat < 10){
    attkImage.src='./Resources/stat_0.png'
  }else if(stat >= 10 && stat <= 19){
    attkImage.src='./Resources/stat_10.png'
  }else if(stat >= 20 && stat <= 29){
    attkImage.src='./Resources/stat_20.png'
  }else if(stat >= 30 && stat <= 39){
    attkImage.src='./Resources/stat_30.png'
  }else if(stat >= 40 && stat <= 49){
    attkImage.src='./Resources/stat_40.png'
  }else if(stat >= 50 && stat <= 59){
    attkImage.src='./Resources/stat_50.png'
  }else if(stat >= 60 && stat <= 69){
    attkImage.src='./Resources/stat_60.png'
  }else if(stat >= 70 && stat <= 79){
    attkImage.src='./Resources/stat_70.png'
  }else if(stat >= 80 && stat <= 89){
    attkImage.src='./Resources/stat_80.png'
  }else if(stat >= 90 && stat <= 99){
    attkImage.src='./Resources/stat_90.png'
  }else if(stat >= 100 && stat <= 109){
    attkImage.src='./Resources/stat_100.png'
  }else if(stat >= 110 && stat <= 119){
    attkImage.src='./Resources/stat_110.png'
  }else if(stat >= 120 && stat <= 129){
    attkImage.src='./Resources/stat_120.png'
  }else if(stat >= 130 && stat <= 139){
    attkImage.src='./Resources/stat_130.png'
  }else if(stat >= 140 && stat <= 149){
    attkImage.src='./Resources/stat_140.png'
  }else if(stat >= 150 && stat <= 159){
    attkImage.src='./Resources/stat_150.png'
  }else if(stat >= 160 && stat <= 169){
    attkImage.src='./Resources/stat_160.png'
  }else if(stat >= 170 && stat <= 179){
    attkImage.src='./Resources/stat_170.png'
  }else if(stat >= 180 && stat <= 189){
    attkImage.src='./Resources/stat_180.png'
  }else if(stat >= 190 && stat <= 199){
    attkImage.src='./Resources/stat_190.png'
  }else if(stat >= 200){
    attkImage.src='./Resources/stat_200.png'
  }
}

const defImageStat= function(stat){
  const defImage= document.getElementById('statDEF')
  const attkStat= document.getElementById('defText')
  attkStat.innerHTML='DEF - ' + stat

  if (stat >= 1 && stat < 10){
    defImage.src='./Resources/stat_0.png'
  }else if(stat >= 10 && stat <= 19){
    defImage.src='./Resources/stat_10.png'
  }else if(stat >= 20 && stat <= 29){
    defImage.src='./Resources/stat_20.png'
  }else if(stat >= 30 && stat <= 39){
    defImage.src='./Resources/stat_30.png'
  }else if(stat >= 40 && stat <= 49){
    defImage.src='./Resources/stat_40.png'
  }else if(stat >= 50 && stat <= 59){
    defImage.src='./Resources/stat_50.png'
  }else if(stat >= 60 && stat <= 69){
    defImage.src='./Resources/stat_60.png'
  }else if(stat >= 70 && stat <= 79){
    defImage.src='./Resources/stat_70.png'
  }else if(stat >= 80 && stat <= 89){
    defImage.src='./Resources/stat_80.png'
  }else if(stat >= 90 && stat <= 99){
    defImage.src='./Resources/stat_90.png'
  }else if(stat >= 100 && stat <=109){
    defImage.src='./Resources/stat_100.png'
  }else if(stat >= 110 && stat <= 119){
    defImage.src='./Resources/stat_110.png'
  }else if(stat >= 120 && stat <= 129){
    defImage.src='./Resources/stat_120.png'
  }else if(stat >= 130 && stat <= 139){
    defImage.src='./Resources/stat_130.png'
  }else if(stat >= 140 && stat <= 149){
    defImage.src='./Resources/stat_140.png'
  }else if(stat >= 150 && stat <= 159){
    defImage.src='./Resources/stat_150.png'
  }else if(stat >= 160 && stat <= 169){
    defImage.src='./Resources/stat_160.png'
  }else if(stat >= 170 && stat <= 179){
    defImage.src='./Resources/stat_170.png'
  }else if(stat >= 180 && stat <= 189){
    defImage.src='./Resources/stat_180.png'
  }else if(stat >= 190 && stat <= 190){
    defImage.src='./Resources/stat_190.png'
  }else if(stat >= 200){
    defImage.src='./Resources/stat_200.png'
  }
}

const sp_attkImageStat= function(stat){
  const sp_attkImage= document.getElementById('statSP-ATTK')
  const spattkStat= document.getElementById('spaText')
  spattkStat.innerHTML='SP-ATK - ' + stat

  if (stat >= 1 && stat < 10){
    sp_attkImage.src='./Resources/stat_0.png'
  }else if(stat >= 10 && stat <= 19){
    sp_attkImage.src='./Resources/stat_10.png'
  }else if(stat >= 20 && stat <= 29){
    sp_attkImage.src='./Resources/stat_20.png'
  }else if(stat >= 30 && stat <= 39){
    sp_attkImage.src='./Resources/stat_30.png'
  }else if(stat >= 40 && stat <= 49){
    sp_attkImage.src='./Resources/stat_40.png'
  }else if(stat >= 50 && stat <= 59){
    sp_attkImage.src='./Resources/stat_50.png'
  }else if(stat >= 60 && stat <= 69){
    sp_attkImage.src='./Resources/stat_60.png'
  }else if(stat >= 70 && stat <= 79){
    sp_attkImage.src='./Resources/stat_70.png'
  }else if(stat >= 80 && stat <= 89){
    sp_attkImage.src='./Resources/stat_80.png'
  }else if(stat >= 90 && stat <= 99){
    sp_attkImage.src='./Resources/stat_90.png'
  }else if(stat >= 100 && stat <=109){
    sp_attkImage.src='./Resources/stat_100.png'
  }else if(stat >= 110 && stat <= 119){
    sp_attk.src='./Resources/stat_110.png'
  }else if(stat >= 120 && stat <= 129){
    sp_attkImage.src='./Resources/stat_120.png'
  }else if(stat >= 130 && stat <= 139){
    sp_attkImage.src='./Resources/stat_130.png'
  }else if(stat >= 140 && stat <= 149){
    sp_attkImage.src='./Resources/stat_140.png'
  }else if(stat >= 150 && stat <= 159){
    sp_attkImage.src='./Resources/stat_150.png'
  }else if(stat >= 160 && stat <= 169){
    sp_attkImage.src='./Resources/stat_160.png'
  }else if(stat >= 170 && stat <= 179){
    sp_attkImage.src='./Resources/stat_170.png'
  }else if(stat >= 180 && stat <= 189){
    sp_attkImage.src='./Resources/stat_180.png'
  }else if(stat >= 190 && stat <= 190){
    sp_attkImage.src='./Resources/stat_190.png'
  }else if(stat >= 200){
    sp_attkImage.src='./Resources/stat_200.png'
  }
}

const sp_defImageStat= function(stat){
  const sp_defImage= document.getElementById('statSP-DEF')
  const spdefStat= document.getElementById('spdText')
  spdefStat.innerHTML='SP-DEF - ' + stat

  if (stat >= 1 && stat < 10){
    sp_defImage.src='./Resources/stat_0.png'
  }else if(stat >= 10 && stat <= 19){
    sp_defImage.src='./Resources/stat_10.png'
  }else if(stat >= 20 && stat <= 29){
    sp_defImage.src='./Resources/stat_20.png'
  }else if(stat >= 30 && stat <= 39){
    sp_defImage.src='./Resources/stat_30.png'
  }else if(stat >= 40 && stat <= 49){
    sp_defImage.src='./Resources/stat_40.png'
  }else if(stat >= 50 && stat <= 59){
    sp_defImage.src='./Resources/stat_50.png'
  }else if(stat >= 60 && stat <= 69){
    sp_defImage.src='./Resources/stat_60.png'
  }else if(stat >= 70 && stat <= 79){
    sp_defImage.src='./Resources/stat_70.png'
  }else if(stat >= 80 && stat <= 89){
    sp_defImage.src='./Resources/stat_80.png'
  }else if(stat >= 90 && stat <= 99){
    sp_defImage.src='./Resources/stat_90.png'
  }else if(stat >= 100 && stat <=109){
    sp_defImage.src='./Resources/stat_100.png'
  }else if(stat >= 110 && stat <= 119){
    sp_defImage.src='./Resources/stat_110.png'
  }else if(stat >= 120 && stat <= 129){
    sp_defImage.src='./Resources/stat_120.png'
  }else if(stat >= 130 && stat <= 139){
    sp_defImage.src='./Resources/stat_130.png'
  }else if(stat >= 140 && stat <= 149){
    sp_defImage.src='./Resources/stat_140.png'
  }else if(stat >= 150 && stat <= 159){
    sp_defImage.src='./Resources/stat_150.png'
  }else if(stat >= 160 && stat <= 169){
    sp_defImage.src='./Resources/stat_160.png'
  }else if(stat >= 170 && stat <= 179){
    sp_defImage.src='./Resources/stat_170.png'
  }else if(stat >= 180 && stat <= 189){
    sp_defImage.src='./Resources/stat_180.png'
  }else if(stat >= 190 && stat <= 190){
    sp_defImage.src='./Resources/stat_190.png'
  }else if(stat >= 200){
    sp_defImage.src='./Resources/stat_200.png'
  }
}

const speedImageStat= function(stat){
  const speedImage= document.getElementById('statSPEED')
  const speedStat= document.getElementById('speedText')
  speedStat.innerHTML='DEF - ' + stat

  if (stat >= 1 && stat < 10){
    speedImage.src='./Resources/stat_0.png'
  }else if(stat >= 10 && stat <= 19){
    speedImage.src='./Resources/stat_10.png'
  }else if(stat >= 20 && stat <= 29){
    speedImage.src='./Resources/stat_20.png'
  }else if(stat >= 30 && stat <= 39){
    speedImage.src='./Resources/stat_30.png'
  }else if(stat >= 40 && stat <= 49){
    speedImage.src='./Resources/stat_40.png'
  }else if(stat >= 50 && stat <= 59){
    speedImage.src='./Resources/stat_50.png'
  }else if(stat >= 60 && stat <= 69){
    speedImage.src='./Resources/stat_60.png'
  }else if(stat >= 70 && stat <= 79){
    speedImage.src='./Resources/stat_70.png'
  }else if(stat >= 80 && stat <= 89){
    speedImage.src='./Resources/stat_80.png'
  }else if(stat >= 90 && stat <= 99){
    speedImage.src='./Resources/stat_90.png'
  }else if(stat >= 100 && stat <=109){
    speedImage.src='./Resources/stat_100.png'
  }else if(stat >= 110 && stat <= 119){
    speedImage.src='./Resources/stat_110.png'
  }else if(stat >= 120 && stat <= 129){
    speedImage.src='./Resources/stat_120.png'
  }else if(stat >= 130 && stat <= 139){
    speedImage.src='./Resources/stat_130.png'
  }else if(stat >= 140 && stat <= 149){
    speedImage.src='./Resources/stat_140.png'
  }else if(stat >= 150 && stat <= 159){
    speedImage.src='./Resources/stat_150.png'
  }else if(stat >= 160 && stat <= 169){
    speedImage.src='./Resources/stat_160.png'
  }else if(stat >= 170 && stat <= 179){
    speedImage.src='./Resources/stat_170.png'
  }else if(stat >= 180 && stat <= 189){
    speedImage.src='./Resources/stat_180.png'
  }else if(stat >= 190 && stat <= 190){
    speedImage.src='./Resources/stat_190.png'
  }else if(stat >= 200){
    speedImage.src='./Resources/stat_200.png'
  }
}


let numero=0

const addNum=function(){
  numero += 1;
  if (numero >= 899){
    numero=1;
  }
  const url =  `https://pokeapi.co/api/v2/pokemon/${numero}`
  const namepk = document.getElementById('pkName')
  fetch(url).then((res)=>{
    return res.json();
  }).then((data) =>{
    //Setting Name
    let pokeName=data.forms[0].name;
    namepk.innerHTML= pokeName.toUpperCase();
    //Getting and setting imgs-------------------
    let pkImage_front= data.sprites.front_default;
    let pkImage_back= data.sprites.back_default;
    let pkImage_shiny= data.sprites.front_shiny;
    pokeImageChange_front(pkImage_front,pokeName)
    pokeImageChange_back(pkImage_back,pokeName)
    pokeImageChange_shiny(pkImage_shiny,pokeName)
    //Getting Type & Setting Class---------------
    let pokeType= data.types[0].type.name;
    const getPokeType= document.getElementById('pktype')
    const getPokeType2=document.getElementById('pktype2')
     if (data.types[1]){
      let pokeType2= data.types[1].type.name;
      getPokeType.innerHTML = pokeType
      getPokeType2.innerHTML = pokeType2
      typeStyle('pktype',pokeType)
      typeStyle('pktype2',pokeType2)
    }else{
      getPokeType.innerHTML = pokeType
      getPokeType2.innerHTML=''
      typeStyle('pktype',pokeType)
      typeStyleInit()
    }
    //Getting abilities-----------------------
    let ability1= data.abilities[0].ability.name;
    const getAbID1= document.getElementById('abil_1')
    const getAbID2= document.getElementById('abil_2')     
    if (data.abilities[1]){
      let ability2= data.abilities[1].ability.name;
      getAbID1.innerHTML= ability1
      getAbID2.innerHTML= ability2
      getAbID1.className='ablities_class'
      getAbID2.className='ablities_class'
    }else if(!data.abilities[1]){
      getAbID1.innerHTML= ability1
      getAbID2.innerHTML=' '
      getAbID1.className='ablities_class'
      getAbID2.className='iniType'
    }


    //Getting stats---------------------------
    let pkHP= data.stats[0].base_stat;
    let pkATTK= data.stats[1].base_stat;
    let pkDEF= data.stats[2].base_stat;
    let pkSPATTK= data.stats[3].base_stat;
    let pkSPDEF= data.stats[4].base_stat;
    let pkSPEED= data.stats[5].base_stat;
    hpImageStat(pkHP)
    attkImageStat(pkATTK)
    defImageStat(pkDEF)
    sp_attkImageStat(pkSPATTK)
    sp_defImageStat(pkSPDEF)
    speedImageStat(pkSPEED)
    
  }).catch((err) =>{
    console.log('Error');
    console.log(err)
  })
}

const subNum=function(){
  numero -= 1;
  if (numero <= 0){
    numero=898;
  }
  const url =  `https://pokeapi.co/api/v2/pokemon/${numero}`
  const namepk = document.getElementById('pkName')
  fetch(url).then((res)=>{
    return res.json();
  }).then((data) =>{
    //Setting Name
    let pokeName=data.forms[0].name;
    namepk.innerHTML= pokeName.toUpperCase();
    //Getting and setting imgs-------------------
    let pkImage_front= data.sprites.front_default;
    let pkImage_back= data.sprites.back_default;
    let pkImage_shiny= data.sprites.front_shiny;
    pokeImageChange_front(pkImage_front,pokeName)
    pokeImageChange_back(pkImage_back,pokeName)
    pokeImageChange_shiny(pkImage_shiny,pokeName)
    //Getting Type & Setting Class---------------
    let pokeType= data.types[0].type.name;
    const getPokeType= document.getElementById('pktype')
    const getPokeType2=document.getElementById('pktype2')
     if (data.types[1]){
      let pokeType2= data.types[1].type.name;
      getPokeType.innerHTML = pokeType
      getPokeType2.innerHTML = pokeType2
      typeStyle('pktype',pokeType)
      typeStyle('pktype2',pokeType2)
    }else{
      getPokeType.innerHTML = pokeType
      getPokeType2.innerHTML=''
      typeStyle('pktype',pokeType)
      typeStyleInit()
    }
    //Getting abilities-----------------------
    let ability1= data.abilities[0].ability.name;
    const getAbID1= document.getElementById('abil_1')
    const getAbID2= document.getElementById('abil_2')     
    if (data.abilities[1]){
      let ability2= data.abilities[1].ability.name;
      getAbID1.innerHTML= ability1
      getAbID2.innerHTML= ability2
      getAbID1.className='ablities_class'
      getAbID2.className='ablities_class'
    }else if(!data.abilities[1]){
      getAbID1.innerHTML= ability1
      getAbID2.innerHTML=' '
      getAbID1.className='ablities_class'
      getAbID2.className='iniType'
    }


    //Getting stats---------------------------
    let pkHP= data.stats[0].base_stat;
    let pkATTK= data.stats[1].base_stat;
    let pkDEF= data.stats[2].base_stat;
    let pkSPATTK= data.stats[3].base_stat;
    let pkSPDEF= data.stats[4].base_stat;
    let pkSPEED= data.stats[5].base_stat;
    hpImageStat(pkHP)
    attkImageStat(pkATTK)
    defImageStat(pkDEF)
    sp_attkImageStat(pkSPATTK)
    sp_defImageStat(pkSPDEF)
    speedImageStat(pkSPEED)
    
  }).catch((err) =>{
    console.log('Error');
    console.log(err)
  })
}