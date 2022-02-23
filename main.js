angular
  .module("deepApp", ["tablesModule"])
  .controller("deepController", ["tablesFactory", deepControllerFunction])

function deepControllerFunction(tablesFactory) {
  this.calculateParameters = function() {
    let firstDepth = parseInt(this.firstDepth);

    if (firstDepth > 0) {
      for (let i = 0; i < tableOne.length; i++) {
        let depthOne = parseInt(Object.keys(tableOne[i])[0]);

        if (firstDepth <= depthOne) {
          let timesOne = Object.keys(tableOne[i][depthOne]);

          let maxTime = parseInt(timesOne[timesOne.length - 1]);

          this.maxTime = maxTime;

          if (firstDepth > 1) {
            let maxBottomTime = `Maximum bottom time for a depth of ${firstDepth} feet is ${maxTime} minutes.`;

            this.maxBottomTime = maxBottomTime;
          } else {
            let maxBottomTime = `Maximum bottom time for a depth of 1 foot is ${maxTime} minutes.`;

            this.maxBottomTime = maxBottomTime;
          }

          let firstTime = parseInt(this.firstTime);

          if (firstTime > 0) {
            for (let j = 0; j < timesOne.length; j++) {
              let timeOne = parseInt(timesOne[j]);

              if (firstTime <= timeOne) {
                let groupOne = tableOne[i][depthOne][timeOne];

                if (firstTime > 1) {
                  let firstPressureGroup = `Pressure group after a dive of ${firstTime} minutes is ${groupOne}.`;

                  this.firstPressureGroup = firstPressureGroup;
                } else {
                  let firstPressureGroup = `Pressure group after a dive of 1 minute is ${groupOne}.`;

                  this.firstPressureGroup = firstPressureGroup;
                }

                let surfaceTime = parseInt(this.surfaceTime);

                if (surfaceTime > 0) {
                  for (let i = 0; i < tableTwo.length; i++) {
                    let levelOne = Object.keys(tableTwo[i])[0];

                    if (groupOne == levelOne) {
                      let intervals = Object.keys(tableTwo[i][levelOne]);

                      let maxInterval = parseInt(intervals[intervals.length - 1]);

                      for (let j = 0; j < intervals.length; j++) {
                        let interval = parseInt(intervals[j]);

                        if (surfaceTime <= interval) {
                          let groupTwo = tableTwo[i][levelOne][interval];

                          if (surfaceTime > 1) {
                            let secondPressureGroup = `Pressure group after a surface interval of ${surfaceTime} minutes is ${groupTwo}.`;

                            this.secondPressureGroup = secondPressureGroup;
                          } else {
                            let secondPressureGroup = `Pressure group after a surface interval of 1 minute is ${groupTwo}.`;

                            this.secondPressureGroup = secondPressureGroup;
                          }

                          let secondDepth = parseInt(this.secondDepth);

                          if (secondDepth > 0) {
                            for (let i = 0; i < tableThree.length; i++) {
                              let levelTwo = Object.keys(tableThree[i])[0];

                              if (groupTwo == levelTwo) {
                                let depths = Object.keys(tableThree[i][groupTwo]);

                                let maxDepth = parseInt(depths[depths.length - 1]);

                                this.maxDepth = maxDepth;

                                for (let j = 0; j < depths.length; j++) {
                                  let depthTwo = parseInt(depths[j]);

                                  if (secondDepth <= depthTwo) {
                                    let residual = parseInt(tableThree[i][groupTwo][depthTwo][0]);

                                    let adjusted = parseInt(tableThree[i][groupTwo][depthTwo][1]);

                                    if (secondDepth > 1) {
                                      if (adjusted == 1) {
                                        let residualTime = `Residual nitrogen time after a depth of ${secondDepth} feet is ${residual} minutes, and the adjusted no decompression limit is 1 minute.`;

                                        this.residualTime = residualTime;
                                      } else {
                                        let residualTime = `Residual nitrogen time after a depth of ${secondDepth} feet is ${residual} minutes, and the adjusted no decompression limit is ${adjusted} minutes.`;

                                        this.residualTime = residualTime;
                                      }
                                    } else {
                                      let residualTime = `Residual nitrogen time for a depth of 1 foot is ${residual} minutes, and the no decompression limit is ${adjusted} minutes.`;

                                      this.residualTime = residualTime;
                                    }

                                    let secondTime = parseInt(this.secondTime);

                                    if (secondTime > 0) {
                                      if (secondTime <= adjusted) {
                                        for (let i = 0; i < tableOne.length; i++) {
                                          let depthFinal = parseInt(Object.keys(tableOne[i])[0]);

                                          if (secondDepth <= depthFinal) {
                                            let timesTwo = Object.keys(tableOne[i][depthFinal]);

                                            for (let j = 0; j < timesTwo.length; j++) {
                                              let timeTwo = parseInt(timesTwo[j]);

                                              let totalTime = secondTime + residual;

                                              if (totalTime <= timeTwo) {
                                                let groupFinal = tableOne[i][depthFinal][timeTwo];

                                                if (secondTime > 1) {
                                                  let finalPressureGroup = `Pressure group after a dive of ${secondTime} minutes is ${groupFinal}.`;

                                                  this.finalPressureGroup = finalPressureGroup;
                                                } else {
                                                  let finalPressureGroup = `Pressure group after a dive of 1 minute is ${groupFinal}.`;

                                                  this.finalPressureGroup = finalPressureGroup;
                                                }

                                                break;
                                              }
                                            }

                                            break;
                                          }
                                        }
                                      } else {
                                        let finalPressureGroup = `A bottom time of ${secondTime} minutes exceeds the no decompression limits. Please enter a bottom time that less than or equal to ${adjusted} minutes.`;

                                        this.finalPressureGroup = finalPressureGroup;
                                      }
                                    } else {
                                      let finalPressureGroup = "Please enter a bottom time that is grater than or equal to 1 minute.";

                                      this.finalPressureGroup = finalPressureGroup;
                                    }

                                    break;
                                  } else {
                                    let residualTime = `A depth of ${secondDepth} feet exceeds the no decompression limits. Please enter a depth that is less than or equal to ${maxDepth} feet.`;

                                    this.residualTime = residualTime;
                                  }
                                }
                              }
                            }
                          } else {
                            let residualTime = "Please enter a depth that is grater than or equal to 1 foot.";

                            this.residualTime = residualTime;
                          }

                          break;
                        } else {
                          let secondPressureGroup = `There is no residual nitrogen after a surface interval of ${maxInterval} minutes.`;

                          this.secondPressureGroup = secondPressureGroup;

                          let secondDepth = parseInt(this.secondDepth);

                          if (secondDepth > 0) {
                            for (let i = 0; i < tableOne.length; i++) {
                              let depthThree = parseInt(Object.keys(tableOne[i])[0]);

                              if (secondDepth <= depthThree) {
                                let timesThree = Object.keys(tableOne[i][depthThree]);

                                let maxTime = parseInt(timesThree[timesThree.length - 1]);

                                if (secondDepth > 1) {
                                  let residualTime = `Maximum bottom time for a depth of ${secondDepth} feet is ${maxTime} minutes.`;

                                  this.residualTime = residualTime;
                                } else {
                                  let residualTime = `Maximum bottom time for a depth of 1 foot is ${maxTime} minutes.`;

                                  this.residualTime = residualTime;
                                }

                                let secondTime = parseInt(this.secondTime);

                                if (secondTime > 0) {
                                  for (let j = 0; j < timesThree.length; j++) {
                                    let timeThree = parseInt(timesThree[j]);

                                    if (secondTime <= timeThree) {
                                      let groupThree = tableOne[i][depthThree][timeThree];

                                      if (secondTime > 1) {
                                        let finalPressureGroup = `Pressure group after a dive of ${secondTime} minutes is ${groupThree}.`;

                                        this.finalPressureGroup = finalPressureGroup;
                                      } else {
                                        let finalPressureGroup = `Pressure group after a dive of 1 minute is ${groupThree}.`;

                                        this.finalPressureGroup = finalPressureGroup;
                                      }

                                      break;
                                    } else {
                                      let finalPressureGroup = `A bottom time of ${secondTime} minutes exceds the no decompression limits. Please enter a bottom time that is less than or equal to ${maxTime} minutes.`;

                                      this.finalPressureGroup = finalPressureGroup;
                                    }
                                  }
                                } else {
                                  let finalPressureGroup = "Please enter a bottom time that is grater than or equal to 1 minute.";

                                  this.finalPressureGroup = finalPressureGroup;
                                }

                                break;
                              } else {
                                let residualTime = `A depth of ${secondDepth} feet exceeds the no decompression limits. Please enter a depth that is less than or equal to 140 feet.`;

                                this.residualTime = residualTime;
                              }
                            }
                          } else {
                            let residualTime = "Please enter a depth that is grater than or equal to 1 foot.";

                            this.residualTime = residualTime;
                          }
                        }
                      }
                    }
                  }
                } else {
                  let secondPressureGroup = "Please enter a surface interval that is grater than or equal to 1 minute.";

                  this.secondPressureGroup = secondPressureGroup;
                }

                break;
              } else {
                let firstPressureGroup = `A bottom time of ${firstTime} minutes exceds the no decompression limits. Please enter a bottom time that is less than or equal to ${maxTime} minutes.`;

                this.firstPressureGroup = firstPressureGroup;
              }
            }
          } else {
            let firstPressureGroup = "Please enter a bottom time that is grater than or equal to 1 minute.";

            this.firstPressureGroup = firstPressureGroup;
          }

          break;
        } else {
          let maxBottomTime = `A depth of ${firstDepth} feet exceeds the no decompression limits. Please enter a depth that is less than or equal to 140 feet.`;

          this.maxBottomTime = maxBottomTime;
        }
      }
    } else {
      let maxBottomTime = "Please enter a depth that is grater than or equal to 1 foot.";

      this.maxBottomTime = maxBottomTime;
    }
  }

  this.reset = function() {
    this.firstDepth = null;
    this.firstTime = null;
    this.surfaceTime = null;
    this.secondDepth = null;
    this.secondTime = null;
  }
}
