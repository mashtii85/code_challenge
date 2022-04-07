import { createGlobalStyle } from './styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    'font-family':'ir',
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }
html{
  overflow: hidden;
}a
  body {
    font-family: ir,'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'ir','Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  body.persian {
    font-family: 'ir';

  }

  #app {
    background-color: #f0f0f0;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family:'ir', Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5;
  }
  .react-slideshow-container + div.indicators {
    direction: ltr;
}
.react-slideshow-container {
  direction: ltr;
}
.Toastify__toast{
  border-radius:5px !important;
  font-family: "ir" !important;
    font-size: smaller;
}
.Toastify__toast-body {
  text-align: center;
}

::-webkit-scrollbar {
  width: 7px;
  height: 7px;
}

/*vertical Track */
::-webkit-scrollbar-track:vertical {
  box-shadow: inset 0 0 3px grey;
  border-radius: 10px;
}

/*vertical Handle */
::-webkit-scrollbar-thumb:vertical {
  background: #149346;
  border-radius: 10px;
}
/*horizontal Track */
::-webkit-scrollbar-track:horizontal {
  box-shadow: inset 0 0 3px grey;
  border-radius: 10px;
}

/*horizontal Handle */
::-webkit-scrollbar-thumb:horizontal {
  background: #149346;
  border-radius: 10px;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #145306;
}

.slider-wrapper{
  border-radius:7px;
  cursor:pointer;

}
.carousel .dot.selected{
  background: #25bd03 !important;
}

 .ag-paging-panel > span {
  font-family: "ir";
}
.ag-cell {
  font-family: "ir";
}
.ag-root {
  border: none !important;
}
.ag-header {
  background: #d1d1d1 !important;
  font-size: 12px !important;
  font-weight: 500 !important;
  border-radius: 5px;
}
.ag-theme-balham {
  background-color: transparent !important;
}
.ag-paging-panel {
  border-top: none !important;
}
.ag-cell-focus:not(.ag-cell-range-selected){
  border:1px solid transparent !important;
}
.ag-row {
  border-color: #f0f0f0 !important;
  border-width: 3px 0 0 !important;
  border-radius: 7px !important;
}
.ag-row{
  box-shadow: 0px px px rgba(0, 0, 0, 0.25) !important;
  transition:transform 0.4s,
  top 0.4s,
  height 0.4s,
  background-color 0.4s,
  opacity 0.2s,
  -webkit-transform 0.4s, box-shadow 0.4s !important;
    .purchasedIndicator{
     opacity:1;
    }

}
div[col-id="invProductShapeName"]{
transition:opacity 0.2s;

}
.firstFromLeft{
  transition:opacity 0.4s;
  opacity:0;
  position: absolute !important;
  left: 1vw !important;
}
.purchasedIndicator{
  transition:opacity 0.4s;
  position: absolute !important;
  left: 1vw !important;
}


.ag-row-focus{
  box-shadow: 0px 4px 27px rgba(0, 0, 0, 0.25) !important;
  border: 1px solid #30a57c !important;
  z-index:1;
  transition:transform 0.4s,
  top 0.4s,
  height 0.4s,
  background-color 0.2s,
  opacity 0.2s,
  -webkit-transform 0.4s, box-shadow 0.4s !important;
.purchasedIcon{
  opacity:0;
}
.purchaseButton{
  transition:opacity 0.4s;
  opacity:1 !important;
}
div[col-id="invProductShapeName"]{
  opacity:0;
}
.qtyInput{
  opacity:1 !important;
}
.info{
opacity:1 !important;
cursor:pointer !important;
pointer-events:auto !important;
    }
}
.ag-row-hover{
    border: 1px solid #30a57c !important;
    background-color: #fcfdfe !important;
}
.ag-root.ag-layout-normal{
  overflow-x:visible !important;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance:textfield;
}
.MuiMenuItem-root {
  color: #03a9f4 !important;
}
.ag-theme-balham .ag-header-cell::after, .ag-theme-balham .ag-header-group-cell::after {
  background: #afafaf;
  content: " ";
  height: 25px !important;
  margin-top: 8px;
  position: absolute;
  text-indent: -2000px;
  width: 2px;
  border:none !important;
  border-radius: 5px;
}
.ag-theme-balham .ag-filter .ag-filter-select {
  margin: 4px;
  font-family: ir;
}
.ag-theme-balham{
  input{
     font-family: ir !important;
  }
}
div[col-id="invProductShapeName"]::after{
display:none;
}
.ag-row:not(.ag-header-row) {
  color: #5e5a5a !important;
}
.MuiFilledInput-root {
  border-radius: 5px !important;
  background-color: white !important;
::before{
  display:none;
}
}
.MuiTabs-indicator{

  height: 3px !important;
  background-color: transparent !important;
  background-image: linear-gradient(to right, #d20e4205, #d20e4205, #d20e4242, #d20e42, #d20e423b, #d20e4205, #d20e4200) !important;

}
.MuiTab-wrapper {
  font-size: 16px;
}
.MuiTab-root {
  min-width: fit-content !important;
  margin-left: 25px !important;
}
.MuiTabs-vertical{
  .MuiTabs-indicator{
  height: 48px !important;
  background-color: #d20e42 !important;
  width:6px !important;
    }
  .MuiTab-root{
    width:100% !important;

      padding: 10px 12px !important;
  }
}
.MuiSelect-selectMenu.MuiSelect-selectMenu {

  background: white !important;
  border-radius: 5px;
  border: 1px solid #dedede;
}
.noSelect{
  .MuiTabs-vertical{
     .MuiTabs-indicator{
         width:0px !important;
      }
  }
}
.whiteText{
  color:white;
}
.greyText{
  color:grey;
}
.backDrop{
  position: fixed;
    top: 0px;
    width: 100%;
    height: 100%;
    background: #8080809e;
    z-index: 1;
}
.shiny {
  @-webkit-keyframes moves {
    from {
      left: -5%;
    }

    to {
      left: 78%;
    }
  }

  @keyframes moves {
    from {
      left: -5%;
    }

    to {
      left: 78%;
    }
  }

  &:after {
    padding: 0;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 50%,
      rgba(255, 255, 255, 0.8) 100%
    );
    content: "";
    width: 20%;
    height: 35px;
    display: block;
    position: absolute;
    z-index: 5;
    top: 0;
    left: 0px;
    filter: blur(0px);
    transform: skewX(-30deg);
    animation: moves 1s linear infinite;
  }
}
.blueLine {
    background: #2f80ed;
    max-width: 75% !important;
    height: 2px;
    margin-top: 10px !important;
  }
  .blueText {
    text-align: left;
    padding-left: 10px;
    color: #2f80ed;
  }
  .MuiListItemText-root {

text-align: initial !important;

}
`
export const FocusedRowStyles = (vwNumber: number): string => `
 .ag-row-focus {
  width: ${vwNumber + 1}vw !important;
  max-width: ${vwNumber + 1}vw !important;
  height: 47px !important;
  padding-top: 7px !important;
  margin-right: -0.5vw !important;
  margin-top: -7px !important;
  .ag-cell-value {
    font-size: 16px;
    padding-top: 3px;
  }
  input {
    margin-top: -2px !important;
  }
}`
export const GriBodyOverFlowStyles = `
.ag-root-wrapper,
.ag-center-cols-viewport,
.ag-root {
  overflow: visible !important;
}
.ag-rtl .ag-body,
.ag-rtl .ag-floating-top,
.ag-rtl .ag-floating-bottom,
.ag-rtl .ag-header,
.ag-rtl .ag-body-viewport,
.ag-rtl .ag-body-horizontal-scroll {
  overflow: visible !important;
}
.ag-center-cols-clipper {
  overflow: visible !important;
}
.ag-body-viewport{
div[col-id="ACW"]{

  width: 0% !important;
  left: 0px !important;
  z-index: 0 !important;
  overflow: visible !important;
  position: absolute !important;
  padding: 0px !important;
}
}
.ACW{
  width: 100%;
  height: 100%;
  .purchasedIcon{
    position: absolute;
    left: 15px;
    transition: opacity 0.4s;
    img{
      max-width:25px;
    }
  }
  .purchaseButton{
    opacity:0;
    transition:opacity 0.4s;
    width: 70px;
    height: 36px;
    background: #149346;
    text-align: center;
    cursor: pointer;
    position: absolute;
    left: 10px;
    top: -3px;
    border-radius: 5px;
    box-shadow: 0 0 6px 0px #149346;
      img{
      width: 25px;
      margin-top: 5px;
        }
  }
  .qtyInput{
    transition:opacity 0.4s;
    opacity:0;
    position: absolute;
    left: 85px;
    input{
      text-align:center;
      width: 75px;
      height: 34px;
      border-radius: 5px;
      border: 1px solid #dedede;
     }
    }
  .info{
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKoSURBVHgB7VZdbuIwEDYGwROIG2z2BEtPsEEIJJ52OcGWE+xygiQnYPcEdE9A+4QEQskNmhusewP2EcRPv0ntyiWxk9K+NZ9kxXZmxp9nxmMzVqJEiQ+GCrsAy+WyU61WO+h+QWtXKhWH5k+n0wYfgfZwOByiwWAQs1eiMKHVauVyzr+he00kCqoJtGi32wXD4VAUUcglRETgDQ+7d9kbAC9G2+12nEfMSGg+n7cB73g8/mJmCBC9w2KCBug76JMXHYvOjc1jmYRkeGYWwwJEx/1+P8r6uV6vr/HxbPrIsVFWjqUIhWH4E4v9NhgiL8QIYRfYMAtgpw3ZEK1jEZv0er0Xa/EzI56NDCCyyFB4qelzJIPwddlTYpswpTX1icoZGZ/ZMcaObtSAjn+tVpuqhAeBeL/fj/VQyPCHNqP472MDwTOhvDBJCJD5rAaLxcKp1+v/sgRhq6vnF3KK5BxmRxI+TrssQIZy504fNxqNmUmWyoRN14Bp4k0ozwsIk1FxNnYtsi4ltUnXBDrZnF0AfbH3Bqd6UkRQ3VcEeYIikyyVBv0k6rpWMpyPuEy+SZ6wrMDPQGELTLJIg5FNNwtwzASbiJOQUXZjIsjRcSjp1IA2AlJX5A01h36EXV7BsFBzsmo7zE4mgL3kYL2o1FjQh0HPoivkgqkqTXl1Pi9LQ2gjJMn4apy6OrAjukynJgNU/KgC510dVLmbzWYI2Y6FzER5RiF1yih8FApmKPl0N8HQvQxFJii0rVbr3kJGyOKZqn/G5wdC4ICYD6M/mBkC7RbtQY4/Qf47PUNMCvj3B0nvmzyc+0AjYjAye+sDjRIeLTA9WQoT0olJj31l+feSwgYk/qLd5hF5NSEd8pHvyhcihSmp3HRFoP2nxAf5+JJHfokSJT4cHgHfKH3QfW2sjQAAAABJRU5ErkJggg==");
    width: 30px;
    height: 30px;
    position: absolute;
    background-size: 25px 25px;
    background-repeat: no-repeat;
    background-position: 0px;
    position: absolute;
    left: 53vw;
    transition:opacity 0.3s;
    opacity:0;
    cursor:none;
    pointer-events:none;
  }
}
.ag-row-hover{
  z-index:1 !important;
    .info{
      opacity:1;
      cursor:pointer;
      pointer-events:auto;
    }
}
.productLoading{
  position: absolute;
  left: 0px;
  width: 162px;
  z-index: 1;
  height: 100%;
  background: white;
  margin-top: 0px;
  padding: 3px;
  border-radius: 5px;
  transition:opacity 0.4s;
  opacity:0;
  pointer-events:none;
  &.visible{
    opacity:1;
  }
  img{
    min-width: 70px;
    max-height: 70px;
    margin-top: -22px;
    position: absolute;
    left: 40px;
  }
}

.ag-row-focus{
  .productLoading{
  position: absolute;
  left: 0px;
  width: 162px;
  z-index: 1;
  height: 100%;
  background: white;
  margin-top: -7px;
  padding: 10px;
  border-radius: 5px;
  }
}


`
export default GlobalStyle
