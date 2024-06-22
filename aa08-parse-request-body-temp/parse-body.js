function firstStep(input) {
  const kvPairArr = input.split('&');

  return kvPairArr
}

function secondStep(input) {
  return input.map(el => el.split('='))
}

function thirdStep(input) {
  return input.map(([k, v]) => [k, v.replace(/\+/g, ' ')])
}

function fourthStep(input) {
  return input.map(([k, v]) => [k, decodeURIComponent(v)])
}

function fifthStep(input) {
  return input.reduce((acc, [k, v]) => {
    acc[k] = v;
    return acc
  }, {})
}

function parseBody(str) {
  const splitString = firstStep(str);

  const keyValArrays = secondStep(splitString)

  const replacedPlus = thirdStep(keyValArrays)

  const decodeValues = fourthStep(replacedPlus)

  return fifthStep(decodeValues)
}

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody
};
