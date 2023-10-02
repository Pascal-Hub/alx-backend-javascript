const { describe, it } = require('mocha');
// const express = require('express');
const { expect } = require('chai');
const app = require('./api');
const request = require('request');

describe('API integration test', () => {
  const API_URL = 'http://localhost:7865/';
  const options = { 
	  url: API_URL,
	  method: 'GET'
	}
  it('GET / returns correct response', (done) => {
    request(options, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  it('GET / returns correct response', (done) => {
	  request(options, (err, res, body) => {
		  expect(body).to.contain('Welcome to the payment system');
		  done();
	  });
  });

})
