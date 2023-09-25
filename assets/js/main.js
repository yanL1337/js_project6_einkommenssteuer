const calculate = () => {
  const year = document.querySelector("#year").value;
  const person1 = Number(document.querySelector("#person1").value);
  const person2 = Number(document.querySelector("#person2").value);
  const alone = document.querySelector(
    "input[name=aloneTogether]:checked"
  ).value;
  const result = document.querySelector("#result");
  let Est, y, z;

  let zvE = alone === "zusammen" ? (person1 + person2) / 2 : person1;

  switch (year) {
    case "2020":
      switch (true) {
        case zvE <= 9408:
          Est = 0;
          break;

        case 9409 <= zvE && zvE <= 14532:
          y = (zvE - 9408) / 10000;
          Est = (972.87 * y + 1400) * y;
          break;

        case 14533 <= zvE && zvE <= 57051:
          z = (zvE - 14532) / 10000;
          Est = (212.02 * z + 2397) * z + 972.79;
          break;

        case 57052 <= zvE && zvE <= 270500:
          Est = 0.42 * zvE - 8963.74;
          break;

        case 270501 <= zvE:
          Est = 0.45 * zvE - 17078.74;
          break;
      }
      break;

    case "2021":
      switch (true) {
        case zvE <= 9744:
          Est = 0;
          break;

        case 9745 <= zvE && zvE <= 14753:
          y = (zvE - 9744) / 10000;
          Est = (995.21 * y + 1400) * y;
          break;

        case 14754 <= zvE && zvE <= 57918:
          z = (zvE - 14753) / 10000;
          Est = (208.85 * z + 2397) * z + 950.96;
          break;

        case 57919 <= zvE && zvE <= 274612:
          Est = 0.42 * zvE - 9136.63;
          break;

        case 274613 <= zvE:
          Est = 0.45 * zvE - 17374.99;
          break;
      }
      break;
    case "2022":
      switch (true) {
        case zvE <= 10347:
          Est = 0;
          break;

        case 10348 <= zvE && zvE <= 14926:
          y = (zvE - 10347) / 10000;
          Est = (1088.67 * y + 1400) * y;
          break;

        case 14927 <= zvE && zvE <= 58596:
          z = (zvE - 14926) / 10000;
          Est = (206.43 * z + 2397) * z + 869.32;
          break;

        case 58597 <= zvE && zvE <= 277825:
          Est = 0.42 * zvE - 9336.45;
          break;

        case 277826 <= zvE:
          Est = 0.45 * zvE - 17671.2;
          break;
      }
      break;
  }

  let einkommenSteuer =
    alone === "zusammen" ? Math.floor(Est * 2) : Math.floor(Est);

  result.innerHTML =
    alone === "zusammen"
      ? `Einkommenssteuer Zusammen: ${einkommenSteuer} Euro`
      : `Einkommenssteuer Alleine: ${einkommenSteuer} Euro`;
};

const change = (value) => {
  const person2 = document.querySelector("#person2");
  if (value === "zusammen") {
    person2.style.display = "block";
  } else {
    person2.style.display = "none";
  }
};
