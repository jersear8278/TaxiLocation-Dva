import React from 'react';
import { connect } from 'dva';
import styles from './Map.css';
import MapComponent from '../components/Map/Map';
import MainLayout from '../components/MainLayout/MainLayout';

function Map() {
  return (
    <MainLayout location={location}>
      <div className={styles.normal}>
        <MapComponent />
      </div>
    </MainLayout>
  );
}

// function mapStateToProps() {
//   return {};
// }

export default connect()(Map);
