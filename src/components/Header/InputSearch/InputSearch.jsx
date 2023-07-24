import React from "react";
import { useState } from "react";
import { SectionSearch } from "./style.js";

export default function InputSearch({ setSearch }) {
  const [searchValue, setSearchValue] = useState("");

  function submit(event) {
    event.preventDefault();
    setSearch(searchValue);
    setSearchValue("");
  }

  return (
    <SectionSearch>
      <form onSubmit={submit}>
        <input
          placeholder="Digitar Pesquisa "
          type="text"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />
        <button type="submit">pesquisar</button>
      </form>
    </SectionSearch>
  );
}
