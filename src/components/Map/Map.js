import React, { Component } from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import styles from './Map.css';
import MapModel from './MapModel';
import SelectBar from './SelectBar';

function Map({ dispatch }) {
  function fetchLocHandler(selected) {
    dispatch(routerRedux.push({
      pathname: '/map',
      query: { selected: selected },
    }));
  }

  return (
    <div className={styles.normal}>
      <SelectBar 
        onOk={fetchLocHandler}
      />
      <MapModel />
    </div>
  );
}

export default connect()(Map);
