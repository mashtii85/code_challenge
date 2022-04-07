import { Container } from '@mui/material'
import Styled from 'styled-components'
import { colors } from '../../../../config'

export const StyledContainer = Styled(Container)`
  width:100% ;
  max-height:100vh;
  height:100vh;
  border:1px dashed red;
  .border{
    border: 1px dashed green;
    height: 100%;
    margin:auto;
    height:100%;
  }
  .form{
    height: 100%;
    margin:auto;
    border:1px dashed green;
  }
  .paper {
    /* margin-top: theme.spacing(8); */
    display: flex;
    flexDirection: column;
    alignItems: center;
  };
  
  .submit {
    padding: 'unset';
    height: 53;
    fontSize: '0.875rem!important';
  };
  .signupButton {
    background-color: 'white';
    color: ${colors.text};
  };
  .image {
    /* background-repeat: no-re; */
    background-size: cover;
  };
  .backgroundColor: { border: 1px solid gray };
  .rememberFormControl {
    margin: 0;
    color: ${colors.text};
  };
  .rememberCheckbox {
    padding: 0;
    margin: 0;
    border: 0.5px solid  #BDBDBD;
    borderRadius: 2px;
    backgroundColor: #ffffff;
    width: 16px;
    height: 17px;
    margin-left: 13px;
  };
  .label { color: colors.text; font-size: 0.75rem !important };
  .forgetPassword {
    color: ${colors.text};
    font-size: 0.875rem !important;
  };
  .divider {
    background-color: #e6e6e6a8;
    width: 50%;
    margin: auto;
    height: 2px;
  };
  .icon {
    color: rgba(0, 0, 0, 0.2);
    font-size: 1.3em;
  }`
