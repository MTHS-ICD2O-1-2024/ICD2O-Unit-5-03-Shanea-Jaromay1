// Copyright (c) 2025 Shanea Jaromay All rights reserved
//
// Created by: Shanea Jaromay
// Created on: Apr 2025
// This file contains the JS functions for index.html

/**
 * This function finds the type of movie for your age
 */
// eslint-disable-next-line no-unused-vars

function findMovieType() {
  // input
  var ageNumber = document.getElementById('age-number').value

  // process
  if (ageNumber >= 17) {
    // output
    document.getElementById('result').innerHTML = 
    'You can see a R movie alone.';
  } else if (ageNumber >= 13) {
    // output
    document.getElementById('result').innerHTML = 
    'You can see a PG-13 movie alone.';
  } else if (ageNumber >= 5) {
    // output
    document.getElementById('result').innerHTML = 
    'You can see a G or PG movie alone.';
  } else {
    // output
    document.getElementById('result').innerHTML = 
    'Kiddo, you are too young for most of the movies.'
  }
}
