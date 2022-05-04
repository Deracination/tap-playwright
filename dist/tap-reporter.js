"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * TAP (test-anything-protocol) reporter for Playwright tests
 * allows running and reporting tests via 'prove'
 */
class TapReporter {
    onBegin(_config, suite) {
        const ntests = suite.allTests().length;
        console.log(`1..${ntests}`);
    }
    onTestBegin(test, result) {
        const suite = test.parent;
        const file = test.location.file.split('/').reverse()[0];
        console.log(`# ${suite.title} - ${test.title} (${file})`);
    }
    onTestEnd(test, result) {
        switch (result.status) {
            case 'passed':
                console.log(`ok - ${test.title}`);
                break;
            case 'failed':
                console.log(`not ok - ${test.title}`);
            default:
                console.log(`not ok - ${result.status} : ${test.title}`);
        }
    }
}
exports.default = TapReporter;
