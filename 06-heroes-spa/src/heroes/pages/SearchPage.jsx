

import React from 'react'
import { HeroCard } from '../components/HeroCard'
import { useForm } from '../hooks/useForm'
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from "query-string";
import { getHeroesByName } from '../helpers/getHeroesByName';

export const SearchPage = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const {q = ''} = queryString.parse(location.search);
  const {searchText, onInputChange} = useForm({
    searchText: q
  });


  const heroes = getHeroesByName(q);

  const showSearch = q.length === 0;
  const showError = q.length > 0 && heroes.length === 0;


  const onSearchSubmit = (event) => {
    event.preventDefault();
   
    // if (searchText.trim().length <= 1) return;
   
    navigate(`?q=${searchText.toLowerCase().trim()}`)

  }

  return (
    <>
      <h1>SearchPage</h1>
      <hr/>
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr/>
          <form onSubmit={ onSearchSubmit}>
            <input
              type="text"
              placeholder='Search a Hero'
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />

            <button className="btn btn-outllne-primary mt-1">
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4> Results </h4>
          <hr />

          {/* {
            (q === '')
            ?
              <div className="alert alert-primary" > Search a hero </div>
              : (heroes.length === 0) && <div className="alert alert-danger" > There's no result with <b> {q} </b> </div>

          } */}

          <div className="alert alert-primary" style={{display: showSearch ? '' : 'none'}} > Search a hero </div>
          <div className="alert alert-danger"  style={{display: showError ? '' : 'none'}} > There's no result with <b> {q} </b> </div>


          {
            heroes.map(hero => <HeroCard key={hero.id} {...hero} />)
          } 

        </div>
      </div>
    </>
    
  )
}
