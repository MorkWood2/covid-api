import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './countryPicker.module.css';

import { fetchCountries } from '../../api';

const CountryPicker = ({ handleCountryChange }) => {
  //  state, modified state
  const [fetchedCounties, setFetchedCounties] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCounties(await fetchCountries());
    };

    fetchAPI();
    //second parameter will change only if setFetchedConties is changed
    //allow us to pick different counties
  }, [setFetchedCounties]);

  return (
    <FormControl className={styles.FormControl}>
      <NativeSelect
        defaultValue=''
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value='global'>Global</option>
        {fetchedCounties.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
