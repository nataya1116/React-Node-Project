const express = require("express");

const dot = require("dotenv");

const fs = require("fs");

const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");

const mailer = require("nodemailer");

const cors = require("cors");

function header() {
  return fs.readFileSync();
}

module.exports = {
  express,
  dot,
  fs,
  jwt,
  bcrypt,
  cors,
  mailer,
};
