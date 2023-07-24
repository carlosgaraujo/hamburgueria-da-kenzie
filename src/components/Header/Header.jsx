import React from "react";
import InputSearch from "./InputSearch/InputSearch.jsx";
import { StyledHeader } from "./style.js";
import { StyledLogo } from "./Logo/Logo.js";
import { Logo } from "./Logo/Logo.jsx";

export default function Header({ setSearch }) {
  return (
    <StyledHeader>
      <Logo />
      <InputSearch setSearch={setSearch} />
    </StyledHeader>
  );
}
