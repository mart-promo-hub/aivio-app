import { useState } from "react";

export async function initPiSDK() {
  if (!window.Pi) {
    throw new Error("Pi SDK not loaded");
  }

  await window.Pi.init({
    version: "2.0",
    sandbox: true
  });

  return true;
}


export async function authenticateWithPi() {

  await initPiSDK();

  const scopes = ["username"];

  const auth = await window.Pi.authenticate(
    scopes,
    function(payment) {
      console.log("Incomplete payment:", payment);
    }
  );

  return auth;
}
