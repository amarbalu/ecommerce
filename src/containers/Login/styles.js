import styled from "styled-components";

export const Modalheader = styled("div")`
  &.modal-header {
    border-bottom: unset;
  }
`;

export const Modalbody = styled("div")`
  .login-page {
    background-color: #e5e7ed;
  }
  .login-page main {
    width: 100%;
    max-width: 460px;
    margin: 8% auto 5%;
  }
  .login-block {
    background-color: #fff;
    padding: 60px;
    -webkit-box-shadow: 0 3px 50px 0 rgba(0, 0, 0, 0.1);
    box-shadow: 0 3px 50px 0 rgba(0, 0, 0, 0.1);
    text-align: center;
    border-radius: 5px;
  }
  .login-block h1,
  .login-block h6 {
    font-family: Open Sans, sans-serif;
    color: #96a2b2;
    letter-spacing: 1px;
  }
  .login-block h1 {
    font-size: 22px;
    margin-bottom: 60px;
    margin-top: 40px;
  }
  .login-block h6 {
    font-size: 11px;
    text-transform: uppercase;
    margin-top: 0;
  }
  .login-block .form-group {
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .login-block .form-control,
  .login-block .form-control:focus,
  .login-block .input-group-addon,
  .login-block .input-group-addon:focus {
    background-color: transparent;
    border: none;
  }
  .login-block .form-control {
    font-size: 17px;
    border-radius: 0px;
  }
  .login-block input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px #fff inset;
    -webkit-text-fill-color: #818a91;
    -webkit-transition: none;
    -o-transition: none;
    transition: none;
  }
  .login-block .input-group-addon {
    color: #29aafe;
    font-size: 19px;
    opacity: 0.5;
  }
  .login-block .btn-block {
    margin-top: 30px;
    padding: 10px;
    width: 160px;
    background: #29aafe;
    border-color: #29aafe;
  }
  .login-block .hr-xs {
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .login-footer {
    margin-top: 60px;
    opacity: 0.5;
    -webkit-transition: opacity 0.3s ease-in-out;
    -o-transition: opacity 0.3s ease-in-out;
    transition: opacity 0.3s ease-in-out;
  }
  .login-footer:hover {
    opacity: 1;
  }
  .login-links {
    padding: 15px 5px 0;
    font-size: 13px;
    color: #96a2b2;
  }
  .login-links:after {
    content: "";
    display: table;
    clear: both;
  }
  .login-links a {
    color: #96a2b2;
    opacity: 0.9;
  }
  .login-links a:hover {
    color: #29aafe;
    opacity: 1;
  }
  @media (max-width: 767px) {
    .login-page main {
      position: static;
      top: auto;
      left: auto;
      -webkit-transform: none;
      -o-transform: none;
      transform: none;
      padding: 30px 15px;
    }
    .login-block {
      padding: 20px;
    }
  }
  .social-icons {
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }
  .social-icons li {
    display: inline-block;
    margin-bottom: 4px;
  }
  .social-icons li.title {
    margin-right: 15px;
    text-transform: uppercase;
    color: #96a2b2;
    font-weight: 700;
    font-size: 13px;
  }
  .social-icons a {
    background-color: #eceeef;
    color: #818a91;
    font-size: 16px;
    display: inline-block;
    line-height: 44px;
    width: 44px;
    height: 44px;
    text-align: center;
    margin-right: 8px;
    border-radius: 100%;
    -webkit-transition: all 0.2s linear;
    -o-transition: all 0.2s linear;
    transition: all 0.2s linear;
  }
  .social-icons a:active,
  .social-icons a:focus,
  .social-icons a:hover {
    color: #fff;
    background-color: #29aafe;
  }
  .social-icons.size-sm a {
    line-height: 34px;
    height: 34px;
    width: 34px;
    font-size: 14px;
  }
  .social-icons a.facebook:hover {
    background-color: #3b5998;
  }
  .social-icons a.rss:hover {
    background-color: #f26522;
  }
  .social-icons a.google-plus:hover {
    background-color: #dd4b39;
  }
  .social-icons a.twitter:hover {
    background-color: #00aced;
  }
  .social-icons a.linkedin:hover {
    background-color: #007bb6;
  }
`;
