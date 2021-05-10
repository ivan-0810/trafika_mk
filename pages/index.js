import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../components/Layout';
import HomePage from '../components/HomePage/HomePage';
import axios from 'axios';
import {
  get_Carousel_1_Data,
  get_Container_1_Data,
  get_Carousel_2_Data,
  get_Container_2_Data,
  get_Container_3_left_Data,
  get_Container_3_right_Data,
  get_Container_4_Data,
  get_Container_5_Data,
  get_Container_6_Data,
  get_Container_7_left_Data,
  get_Container_8_Data,
  get_Container_7_right_Data
} from '../store/home_page/action'
import { get_Analizi_Temi } from '../store/sidebar/action'
import { wrapper } from '../store/store';

const Home = () => {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
};



export const getServerSideProps = wrapper.getServerSideProps(
   async ({ store }) => {
     try {
       const res = await axios(`${process.env.VESNIK_POCETNA_URL}rotator`)
       const carousel_1 = await res.data
       store.dispatch(get_Carousel_1_Data(carousel_1))
     } catch (error) {
        console.log(error)
     }
     try {
      const res = await axios(`${process.env.VESNIK_POCETNA_URL}top_news`)
      const container_1 = await res.data
      store.dispatch(get_Container_1_Data(container_1))
    } catch (error) {
       console.log(error)
    }
    try {
      const res = await axios(`${process.env.VESNIK_POCETNA_URL}makedonija`)
      const container_2 = await res.data
      store.dispatch(get_Container_2_Data(container_2))
    } catch (error) {
       console.log(error)
    }
    try {
      const res = await axios(`${process.env.VESNIK_POCETNA_URL}balkan`)
      const container_3_left = await res.data
      store.dispatch(get_Container_3_left_Data(container_3_left))
    } catch (error) {
       console.log(error)
    }
    try {
      const res = await axios(`${process.env.VESNIK_POCETNA_URL}svet`)
      const container_3_right = await res.data
      store.dispatch(get_Container_3_right_Data(container_3_right))
    } catch (error) {
       console.log(error)
    }
    try {
      const res = await axios(`${process.env.VESNIK_POCETNA_URL}life`)
      const container_4 = await res.data
      store.dispatch(get_Container_4_Data(container_4))
    } catch (error) {
       console.log(error)
    }
    try {
      const res = await axios(`${process.env.VESNIK_POCETNA_URL}star`)
      const container_5 = await res.data
      store.dispatch(get_Container_5_Data(container_5))
    } catch (error) {
       console.log(error)
    }
    try {
      const res = await axios(`${process.env.VESNIK_POCETNA_URL}vash_izbor`)//vash izbor
      const container_6 = await res.data
      console.log(container_6, 'data');
      store.dispatch(get_Container_6_Data(container_6))
    } catch (error) {
       console.log(error)
    }
    try {
      const res = await axios(`${process.env.VESNIK_POCETNA_URL}techno`)
      const container_7_left = await res.data
      store.dispatch(get_Container_7_left_Data(container_7_left))
    } catch (error) {
       console.log(error)
    }
    try {
      const res = await axios(`${process.env.VESNIK_POCETNA_URL}ekonomija`)
      const container_7_right = await res.data
      store.dispatch(get_Container_7_right_Data(container_7_right))
    } catch (error) {
       console.log(error)
    }
    
    try {
      const res = await axios(`${process.env.VESNIK_POCETNA_URL}sport`)
      const container_8 = await res.data
      store.dispatch(get_Container_8_Data(container_8))
    } catch (error) {
       console.log(error)
    }
    try {
      const res = await axios(`${process.env.VESNIK_POCETNA_URL}cult`)
      const carousel_2 = await res.data
      store.dispatch(get_Carousel_2_Data(carousel_2))
    } catch (error) {
       console.log(error)
    }
    try {
      const res = await axios(`${process.env.VESNIK_POCETNA_URL}temi`)
      const sidebar = await res.data
      store.dispatch(get_Analizi_Temi(sidebar))
    } catch (error) {
       console.log(error)
    }
  }
);

export default Home;