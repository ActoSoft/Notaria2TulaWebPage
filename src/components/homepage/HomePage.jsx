import React, { Component } from 'react'
import './homepage.scss'
import back1 from '../../static/img/Back1.jpg'
import back2 from '../../static/img/Back2.jpg'
import back3 from '../../static/img/Back3.jpg'
import Slider from './Slider'
import About from './About'
import Procedures from './Procedures'
import Sign from '../../static/img/Sign.jpg'
import InfoAbout from './InfoAbout'

class HomePage extends Component {

  constructor(props){
      super(props)
      this.state = {
        urls:[
          back1,
          back2,
          back3
        ],
        cont: 0,
        interval: null,
        actualImage: null, 
        classChange: false,
        data: [
          {
            categoria: "Transmisiones de propiedad/bienes inmuebles",
            tramites: [
              "Jornada Notarial",
              "Compraventa",
              "Donación",
              "Adjudicación por herencia",
              "Constitución de condominio",
              "Cancelación de hipoteca",
              "Fideicomiso"
            ]
          },
          {
            categoria: "Sucesiones",
            tramites: [
              "Adjudicación por herencia",
              "Asesoría Jurídica",
              "Cesión de derechos hereditarios"
            ]
          },
          {
            categoria: "Constitución de sociedades",
            tramites: [
              "Sociedad Anónima de Capital Variable",
              "Sociedad de Responsabilidad Limitada",
              "Sociedad Anónima Promotora de Inversión",
              "Sociedad Civil",
              "Asociación Civil"
            ]
          },
          {
            categoria: "Testamento",
            tramites: [
              "Spetiembre y Octubre, mes del testamento"
            ]
          },
          {
            categoria: "Trámites diversos",
            tramites: [
              "Sociedad Anónima de Capital Variable",
              "Sociedad de Responsabilidad Limitada",
              "Sociedad Anónima Promotora de Inversión",
              "Sociedad Civil",
              "Asociación Civil"
            ]
          },
        ],
        actualServiceMobile:0,
        globalOption:0,
        minOp:0,
        maxOp:2,
        min:0,
        max:2,
        contador:0,
        leftSelect:null,
        nextOption:null,
        previusOption:null,
        only:null,
        displays:[],
      }
  }

  openService = (index) =>{
    let {contador}=this.state
    let {leftSelect} = this.state
    let {globalOption} = this.state

    let all=document.getElementsByClassName('service')
    let select = document.getElementsByClassName('service')[index]
    let pSelect = document.getElementsByClassName('serviceTitle')[index]
  
    let arrowsTop = document.getElementsByClassName("arrowsTop")
    let container=document.getElementsByClassName("proceduresContainer")[0]
    let widthUtil=container.getBoundingClientRect()

    let {displays} = this.state
    if(contador%2===0){
      for(let i=0;i<5;i++){
        console.log(window.getComputedStyle(all[i]).getPropertyValue("display"))
        displays[i]=window.getComputedStyle(all[i]).getPropertyValue("display")
      }
    }

    for(let i=0;i<2;i++){
      contador%2===0 ?
      arrowsTop[i].className="arrowsTop notSeeArrow" 
      : 
      setTimeout(()=>{
        arrowsTop[i].className="arrowsTop seeArrow"
      },500)

      if(contador%2===0){
        arrowsTop[i].style.opacity="0"
        setTimeout(()=>{
          arrowsTop[i].style.display="none"
          arrowsTop[i].className="arrowsTop"
        },500)
      }
      else{
        arrowsTop[i].style.opacity="1"
        setTimeout(()=>{
          this.state.minOp<=0 ? arrowsTop[0].style.display="none" : arrowsTop[0].style.display="block"
          this.state.maxOp0>=4 ? arrowsTop[1].style.display="none" : arrowsTop[1].style.display="block"
          arrowsTop[i].className="arrowsTop"
        },500)
      }
    }

    let size=select.width
    let position = select.getBoundingClientRect();
    if(contador%2===0){
      leftSelect = select.offsetLeft
    }
    let topSelect  = select.offsetTop

    let key
    if(contador%2===0)
      key="@keyframes anim {from{position:absolute;left: "+(leftSelect-10)+"px; top: "+(topSelect-10)+"px;background-color: #403c3c; -webkit-box-shadow: 0 0 10px 0px #0007;}\
      to{position:absolute;left: "+((widthUtil.width/2)-position.width/2-10)+"px;top: "+(topSelect-10)+"px;background-color: #fffc; -webkit-box-shadow: 0 0 10px 0.5px #0007;}}"
    else{
      key="@keyframes anim {from{transform:scale(1.1);position:absolute;left: "+((widthUtil.width/2)-position.width/2-10)+"px; top: "+(topSelect-10)+"px;background-color: #fffc; -webkit-box-shadow: 0 0 10px 0.5px #0007;}\
      to{transform:scale(1);position:absolute;left: "+(leftSelect-10)+"px;top: "+(topSelect-10)+"px;background-color: #403c3c; -webkit-box-shadow: 0 0 10px 0px #0007;}}"
    }
    document.styleSheets[0].insertRule(key);
    if(contador%2===0){
      setTimeout(()=>{
        pSelect.className="serviceTitle titleSelectStart"
        pSelect.style.color="#000"
        select.style.backgroundColor="#fffc"
        select.style.transform="scale(1.1)"
        select.style.boxShadow="0 0 10px 0.5px #0007"
        select.className="service other"
        let uno=document.getElementsByClassName("other")[0]
        uno.style.animation="anim 0.5s"
        uno.className="service"
        container.style.minHeight=(widthUtil.height-1)+"px"
        setTimeout(()=>{
          uno.style.animation=""
          container.style.minHeight=""
        }, 500)
      }, 500)
  
        for(let i=0;i<index;i++){
          all[i].className="service noneLeft"
          setTimeout(()=>{
            all[i].style.display="none"
            all[i].className="service"
          }, 500)
        }
        for(let i=index+1;i<5;i++){
          all[i].className="service noneRight"
          setTimeout(()=>{
            all[i].style.display="none"
            all[i].className="service"
          }, 500)
        }
    }else{
        pSelect.className="serviceTitle titleSelectEnd"
        pSelect.style.color="#ebedfa"
        select.style.backgroundColor="#403c3c"
        select.style.boxShadow="0 0 10px 0px #0007"
        select.style.transform=""
        select.className="service other"
        let uno=document.getElementsByClassName("other")[0]
        uno.style.animation="anim 0.5s"
        uno.className="service"
        container.style.minHeight=(widthUtil.height-1)+"px"
        setTimeout(()=>{
          uno.style.animation=""
          container.style.minHeight=""
        }, 1000)
  
  
      setTimeout(()=>{
        for(let i=0;i<index;i++){
          all[i].className="service flexLeft"
          all[i].style.display=displays[i]
          setTimeout(()=>{
            all[i].className="service"
          }, 500)
        }
        for(let i=index+1;i<5;i++){
          all[i].className="service flexRight"
          all[i].style.display=displays[i]
          setTimeout(()=>{
            all[i].className="service"
          }, 500)
        }
      }, 500)
  
    }

    let arrows=document.getElementsByClassName("arrows")
    if(this.state.data[index].tramites.length>3){
      for(let i=0;i<2;i++){
        arrows[i].style.display="block"
      }
    }else{
      for(let i=0;i<2;i++){
        arrows[i].style.display="none"
      }
    }
  
  
    let one = document.styleSheets[0].rules[0]
    let other = document.styleSheets[0]
    setTimeout(()=>{
      other.removeRule(one)
    },1000)
  
    let options = document.getElementsByClassName("otherContainerOp")[0]
    if(contador%2===0){
      setTimeout(()=>{
        options.style.display="flex"
        options.className = "otherContainerOp estar"
      }, 1000)
    }else{
      options.className = "otherContainerOp noEstar"
      setTimeout(()=>{
        options.style.display="none"
      },500)
    }
    contador++;
    globalOption=index

    let {nextOption} = this.state
    let {previusOption} = this.state

    nextOption = 3
    previusOption = -1

    let op = document.getElementsByClassName("op")[0]
    while(op.firstChild){
      op.removeChild(op.firstChild)
    }
    let text
    let newSpan
    if(this.state.data[globalOption].tramites.length>=3){
      for(let i=0;i<3;i++){
        newSpan = document.createElement("span");
        newSpan.setAttribute("class","optionService");
        text=document.createTextNode(this.state.data[globalOption].tramites[i]);
        newSpan.appendChild(text);
        op.appendChild(newSpan);
      }
    }else{
      for(let i=0;i<this.state.data[globalOption].tramites.length;i++){
        newSpan = document.createElement("span");
        newSpan.setAttribute("class","optionService");
        text=document.createTextNode(this.state.data[globalOption].tramites[i]);
        newSpan.appendChild(text);
        op.appendChild(newSpan);
      }
    }
    
    let maximum = this.state.data[globalOption].tramites.length-1

    previusOption<0 ? arrows[0].style.display="none" : arrows[0].style.display="block"
    nextOption>maximum ? arrows[1].style.display="none" : arrows[1].style.display="block"

    this.setState({contador,leftSelect, globalOption, nextOption, previusOption})
  }
  
  move = (direction) =>{
    let {globalOption} = this.state
    let {nextOption} = this.state
    let {previusOption} = this.state

    let arrows = document.getElementsByClassName("arrows")
    let container = document.getElementsByClassName("op")[0]
    let optionsHTML = document.getElementsByClassName('optionService')
    let options = [optionsHTML.length]
    let right, left
  
    for(let i=0;i<optionsHTML.length;i++){
      options[i]=optionsHTML[i]
    }
    let maximum = this.state.data[globalOption].tramites.length-1

    let animationsKeyFrames=[4]
    let leftPosition=[4]

    for(let i=0;i<3;i++){
      leftPosition[i]=optionsHTML[i].offsetLeft
    }

    if(direction){
      animationsKeyFrames[0]="@keyframes animationOne{from{left:"+leftPosition[0]+"px;width:30%;opacity:1;}to{left:-30%;width:0%;opacity:0;}}"
      animationsKeyFrames[1]="@keyframes animationTwo{from{left:"+leftPosition[1]+"px}to{left:"+leftPosition[0]+"px}}"
      animationsKeyFrames[2]="@keyframes animationThree{from{left:"+leftPosition[2]+"px}to{left:"+leftPosition[1]+"px}}"
      animationsKeyFrames[3]="@keyframes animationFour{from{left:100%;width:0%;opacity:0;}to{left:"+leftPosition[2]+"px;width:30%;opacity:1;}}"
    }else{
      animationsKeyFrames[0]="@keyframes animationOne{from{left:-30%;width:0%;opacity:0;}to{left:"+leftPosition[0]+"px;width:30%;opacity:1;}}"
      animationsKeyFrames[1]="@keyframes animationTwo{from{left:"+leftPosition[0]+"px}to{left:"+leftPosition[1]+"px}}"
      animationsKeyFrames[2]="@keyframes animationThree{from{left:"+leftPosition[1]+"px}to{left:"+leftPosition[2]+"px}}"
      animationsKeyFrames[3]="@keyframes animationFour{from{left:"+leftPosition[2]+"px;width:30%;opacity:1;}to{left:100%;width:0%;opacity:0;}}"
    }

    animationsKeyFrames.map((animation)=>{
      document.styleSheets[0].insertRule(animation);
    })

    if(direction){
      let newOption = document.createElement("span")
      newOption.setAttribute("class","optionService")
      let content = document.createTextNode(this.state.data[globalOption].tramites[nextOption])
      newOption.appendChild(content)
      newOption.style.position="absolute"
      newOption.style.left="100%"

      for(let i=0;i<3;i++){
        optionsHTML[i].style.position="absolute"
        optionsHTML[i].style.left=leftPosition[i]+"px"
      }
      container.appendChild(newOption)


      optionsHTML[0].id="toAnimOne"
      let first = document.getElementById("toAnimOne")
      first.style.animation="animationOne 0.3s"

      optionsHTML[1].id="toAnimTwo"
      let second = document.getElementById("toAnimTwo")
      second.style.animation="animationTwo 0.3s"

      optionsHTML[2].id="toAnimThree"
      let thirty = document.getElementById("toAnimThree")
      thirty.style.animation="animationThree 0.3s"

      newOption.id="toAnimFour"
      let fourty = document.getElementById("toAnimFour")
      fourty.style.animation="animationFour 0.3s"

      setTimeout(()=>{
        optionsHTML[0].style.display="none"
        optionsHTML[1].style.left=leftPosition[0]+"px"
        optionsHTML[1].style.position=""
        optionsHTML[2].style.left=leftPosition[1]+"px"
        optionsHTML[2].style.position=""
        newOption.style.left=leftPosition[2]+"px"
        newOption.style.position=""
        container.removeChild(container.firstChild)

        first.style.animation=""
        second.style.animation=""
        thirty.style.animation=""
        fourty.style.animation=""

        first.id=""
        second.id=""
        thirty.id=""
        fourty.id=""

        let other = document.styleSheets[0]
        for(let i=0;i<4;i++){
          other.removeRule(document.styleSheets[0].rules[0])
        }

      },300)

      nextOption+=1
      if(nextOption>maximum){
        arrows[1].className="arrows notSeeArrow"
        setTimeout(()=>{
          arrows[1].style.display="none"
        }, 300)
      }
      if(previusOption<0)
        left=true

      previusOption+=1
      if(left===true){
        arrows[0].className="arrows seeArrow"
        arrows[0].style.display="block"
        left=false
      }
    }else{
      let newOption = document.createElement("span")
      newOption.setAttribute("class","optionService")
      let content = document.createTextNode(this.state.data[globalOption].tramites[previusOption])
      newOption.appendChild(content)
      newOption.style.position="absolute"
      newOption.style.left="-30%"

      for(let i=0;i<3;i++){
        optionsHTML[i].style.position="absolute"
        optionsHTML[i].style.left=leftPosition[i]+"px"
      }

      container.prepend(newOption)

      newOption.id="toAnimOne"
      let first = document.getElementById("toAnimOne")
      first.style.animation="animationOne 0.3s"

      optionsHTML[1].id="toAnimTwo"
      let second = document.getElementById("toAnimTwo")
      second.style.animation="animationTwo 0.3s"

      optionsHTML[2].id="toAnimThree"
      let thirty = document.getElementById("toAnimThree")
      thirty.style.animation="animationThree 0.3s"

      optionsHTML[3].id="toAnimFour"
      let fourty = document.getElementById("toAnimFour")
      fourty.style.animation="animationFour 0.3s"


      setTimeout(()=>{
        newOption.style.left=leftPosition[0]+"px"
        newOption.style.position=""

        optionsHTML[1].style.left=leftPosition[1]+"px"
        optionsHTML[1].style.position=""

        optionsHTML[2].style.left=leftPosition[2]+"px"
        optionsHTML[2].style.position=""

        optionsHTML[3].style.display="none"
        
        container.removeChild(optionsHTML[3])

        first.style.animation=""
        second.style.animation=""
        thirty.style.animation=""
        fourty.style.animation=""

        first.id=""
        second.id=""
        thirty.id=""
        fourty.id=""

        let other = document.styleSheets[0]
        for(let i=0;i<4;i++){
          other.removeRule(document.styleSheets[0].rules[0])
        }
      },300)
  
      previusOption-=1
      if(previusOption<0){
        arrows[0].className="arrows notSeeArrow"
        setTimeout(()=>{
          arrows[0].style.display="none"
        }, 300)
      }
      if(nextOption>maximum)
        right=true

      nextOption-=1
      if(right===true){
        arrows[1].className="arrows seeArrow"
        arrows[1].style.display="block"
        right=false
      }
    }

      this.setState({nextOption, previusOption, globalOption})
  
  }

  moveTop = (direction) =>{
    let {minOp} = this.state
    let {maxOp} = this.state

    if(direction){
      minOp++
      maxOp++
    }else{
      minOp--
      maxOp--
    }

    let container = document.getElementsByClassName("proceduresContainer")[0]
    let allOptions = document.getElementsByClassName("service")

    let left = [3]
    let top
    let animation = [4]

    let ids=["blackService0","blackService1","blackService2","blackService3","blackService4"]

    container.style.position="relative"
    container.style.justifyContent="space-between"
    top = allOptions[minOp+1].offsetTop
    
    if(direction){
      left[0]=allOptions[minOp-1].offsetLeft
      left[1]=allOptions[minOp].offsetLeft
      left[2]=allOptions[maxOp-1].offsetLeft
    }else{
      left[0]=allOptions[minOp+1].offsetLeft
      left[1]=allOptions[maxOp].offsetLeft
      left[2]=allOptions[maxOp+1].offsetLeft
    }

    let width = allOptions[minOp+1].getBoundingClientRect().width
    container.style.height=(width+20)+"px"

    if(direction){
      animation[0]="@keyframes animationTOne{from{position:absolute;top:"+(top-10)+"px;left:"+(left[0]-10)+"px;opacity:1;width:"+width+"px;height:"+width+"px}to{position:absolute;top:"+(top-10)+"px;left:0px;opacity:0;width:0px;height:0px}}"
      animation[1]="@keyframes animationTTwo{from{position:absolute;top:"+(top-10)+"px;left:"+(left[1]-10)+"px;}to{position:absolute;top:"+(top-10)+"px;left:"+(left[0]-10)+"px;}}"
      animation[2]="@keyframes animationTThree{from{position:absolute;top:"+(top-10)+"px;left:"+(left[2]-10)+"px;}to{position:absolute;top:"+(top-10)+"px;left:"+(left[1]-10)+"px;}}"
      animation[3]="@keyframes animationTFour{from{position:absolute;top:"+(top-10)+"px;left:"+(left[2]+width+10)+"px;opacity:0;width:0px;height:0px}to{position:absolute;top:"+(top-10)+"px;left:"+(left[2]-10)+"px;opacity:1;width:"+width+"px;height:"+width+"px}}"
    }else{
      animation[0]="@keyframes animationTOne{from{position:absolute;top"+(top-10)+"px;left:"+(left[0]-20-width)+"px;width:0px;height:0px;opacity:0;}to{position:absolute;top"+(top-10)+"px;left:"+(left[0]-10)+"px;width:"+width+"px;height:"+width+"px;opacity:1;}}"
      animation[1]="@keyframes animationTTwo{from{position:absolute;top:"+(top-10)+"px;left:"+(left[0]-10)+"px;}to{position:absolute;top:"+(top-10)+"px;left:"+(left[1]-10)+"px;}}"
      animation[2]="@keyframes animationTThree{from{position:absolute;top:"+(top-10)+"px;left:"+(left[1]-10)+"px;}to{position:absolute;top:"+(top-10)+"px;left:"+(left[2]-10)+"px;}}"
      animation[4]="@keyframes animationTFour{from{position:absolute;top:"+(top-10)+"px;left:"+(left[2]-10)+"px;width:"+width+"px;height:"+width+"px;opacity:1;}to{position:absolute;top:"+(top-10)+"px;left:"+(left[2]+10+width)+"px;width:0px;height:0px;opacity:0;}}"
    }

    animation.map((animate)=>{
      document.styleSheets[0].insertRule(animate);
    })

    if(direction){
      for(let i=0;i<allOptions.length;i++){
        allOptions[i].style.position="absolute"
      }

      allOptions[maxOp].style.display="flex"
      for(let i=minOp-1;i<maxOp;i++){
        allOptions[i].style.left=left[i]+"px"
        allOptions[i].style.top=top+"px"
      }
      allOptions[maxOp].style.left=left[2]+10+width+"px"
      allOptions[maxOp].style.top=top-10+"px"

      allOptions[minOp-1].id="toAnimOne"
      let first = document.getElementById("toAnimOne")
      first.style.animation="animationTOne 0.3s"

      allOptions[minOp].id="toAnimTwo"
      let second = document.getElementById("toAnimTwo")
      second.style.animation="animationTTwo 0.3s"

      allOptions[maxOp-1].id="toAnimThree"
      let thirty = document.getElementById("toAnimThree")
      thirty.style.animation="animationTThree 0.3s"

      allOptions[maxOp].id="toAnimFour"
      let fourty = document.getElementById("toAnimFour")
      fourty.style.animation="animationTFour 0.3s"

      setTimeout(()=>{
        allOptions[minOp-1].style.display="none"

        allOptions[minOp].style.left=left[0]-10+"px"
        allOptions[minOp].style.top=top-10+"px"

        allOptions[maxOp-1].style.left=left[1]-10+"px"
        allOptions[maxOp-1].style.top=top-10+"px"

        allOptions[maxOp].style.left=left[2]-10+"px"
        allOptions[maxOp].style.top=top-10+"px"

        first.style.animation=""
        second.style.animation=""
        thirty.style.animation=""
        fourty.style.animation=""

        first.id=""
        second.id=""
        thirty.id=""
        fourty.id=""

        let other = document.styleSheets[0]
        for(let i=0;i<4;i++){
          other.removeRule(document.styleSheets[0].rules[0])
        }

        for(let i=0;i<allOptions.length;i++){
          allOptions[i].style.position="static"
        }
        container.style.position="static"
      },300)

    }else{
      for(let i=0;i<allOptions.length;i++){
        allOptions[i].style.position="absolute"
      }

      allOptions[minOp].style.display="flex"
      for(let i=minOp+1;i<=maxOp+1;i++){
        allOptions[i].style.left=left[i]+"px"
        allOptions[i].style.top=top+"px"
      }
      allOptions[minOp].style.left=left[0]-20-width+"px"
      allOptions[minOp].style.top=top-10+"px"

      allOptions[minOp].id="toAnimOne"
      let first = document.getElementById("toAnimOne")
      first.style.animation="animationTOne 0.3s"

      allOptions[minOp+1].id="toAnimTwo"
      let second = document.getElementById("toAnimTwo")
      second.style.animation="animationTTwo 0.3s"

      allOptions[maxOp].id="toAnimThree"
      let thirty = document.getElementById("toAnimThree")
      thirty.style.animation="animationTThree 0.3s"

      allOptions[maxOp+1].id="toAnimFour"
      let fourty = document.getElementById("toAnimFour")
      fourty.style.animation="animationTFour 0.3s"

      setTimeout(()=>{
        allOptions[maxOp+1].style.display="none"

        allOptions[minOp].style.left=left[0]-10+"px"
        allOptions[minOp].style.top=top-10+"px"

        allOptions[minOp+1].style.left=left[1]-10+"px"
        allOptions[minOp+1].style.top=top-10+"px"

        allOptions[maxOp].style.left=left[2]-10+"px"
        allOptions[maxOp].style.top=top-10+"px"

        first.style.animation=""
        second.style.animation=""
        thirty.style.animation=""
        fourty.style.animation=""

        first.id=""
        second.id=""
        thirty.id=""
        fourty.id=""

        let other = document.styleSheets[0]
        for(let i=0;i<4;i++){
          other.removeRule(document.styleSheets[0].rules[0])
        }

        for(let i=0;i<allOptions.length;i++){
          allOptions[i].style.position="static"
        }
        container.style.position="static"
      },300)
    }

    container.style.justifyContent="space-around"
    this.setState({minOp,maxOp})
  }

  updateMobile = (direction) => {
    let {actualServiceMobile} = this.state

    direction ? actualServiceMobile++ : actualServiceMobile--

    this.setState({actualServiceMobile})
  }

  toResize = () =>{

    let {only}=this.state
    let {minOp,maxOp} = this.state
    let ids=["blackService0","blackService1","blackService2","blackService3","blackService4"]

    let width=window.innerWidth
    let options = document.getElementsByClassName("service")
    if(width>1009){
      for(let i=0;i<options.length;i++){
        options[i].style.display="flex"
        options[i].id=ids[i]
      }
      only=true
    }
    if(width<=1009 && only===true){
      for(let i=0;i<options.length;i++){
        options[i].style.display=""
      }
      minOp=0
      maxOp=2
      only=false
    }

    this.setState({only,minOp,maxOp})
  }

  componentDidMount = () =>{
    window.scrollTo(0,0)
    let { interval } = this.state;
    interval = window.setInterval(this.change, 5000);
    window.addEventListener("resize", this.toResize)
    this.setState({ interval, actualImage: this.state.urls[0] });
  }

  componentWillUnmount = () => {
    let { interval } = this.state;
    clearInterval(interval)
    window.removeEventListener("resize", this.toResize)
    this.setState({ interval });
  }

  change = () =>{
    let image=document.getElementById("imgC")
    let { cont } = this.state
    let { classChange } = this.state
    cont++
    if(cont > 2) cont = 0
    classChange===false ? image.className="oneImage" : image.className="otherImage"
    classChange=!classChange
    this.setState({cont, actualImage: this.state.urls[cont], classChange});
  }

  goKnowUs = () => {
    let top = document.getElementById('abCont').offsetTop
    let scrollStep = 3
    let counter = window.scrollY
    let positionI= window.scrollY
    let scrollInterval = setInterval(
      ()=>{
        if(counter<=top){
          //console.log(counter)
          window.scrollBy(0, scrollStep)
          counter+=scrollStep
          //console.log(counter)
          if(counter===top-((top-positionI)%3)){
            scrollStep=(top-positionI)%3
            if(scrollStep<=0){
              scrollStep=1
            }
          }
        }
        else{
          clearInterval(scrollInterval)
        }
        }, 1
      )
  }

  render(){
    return(
      <div id="homeContent">
        <Slider 
          actualImage={this.state.actualImage}
          goKnowUs={this.goKnowUs}
        />

        <About 
          imageMobile={Sign}
        />
        
        <Procedures 
          data={this.state.data}
          actualService={this.state.globalOption}
          min={this.state.min}
          max={this.state.max}
          openService={this.openService}
          move={this.move}
          moveTop={this.moveTop}
          minOp={this.state.minOp}
          maxOp={this.state.maxOp}
          actual={this.state.actualServiceMobile}
          up={this.updateMobile}
        />
        
        <InfoAbout />

      </div>
    )
  }
}

export default HomePage
