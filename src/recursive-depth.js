module.exports = class DepthCalculator {
    calculateDepth (arr) {
        let count = 1;
        for (let i of arr) {
            if(Array.isArray(i)) {
              count = Math.max(this.calculateDepth(i) + 1, count);
            }
        }
        return count;
    }
};