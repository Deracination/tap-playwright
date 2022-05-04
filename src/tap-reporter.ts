import { Reporter, TestCase, TestResult } from '@playwright/test/reporter';

/**
 * TAP (test-anything-protocol) reporter for Playwright tests
 * allows running and reporting tests via 'prove'
 */
class TapReporter implements Reporter {
    onBegin(_config: any, suite: any) : void {
        const ntests = suite.allTests().length;

        console.log(`1..${ntests}`);
    }

    onTestBegin(test: TestCase, result: TestResult): void {
        const suite = test.parent;
        const file = test.location.file.split('/').reverse()[0];

        console.log(`# ${suite.title} - ${test.title} (${file})`);
    }

    onTestEnd(test: TestCase, result: TestResult): void {
        switch(result.status) {
            case 'passed':
                console.log('ok');
                break;
            case 'failed':
                console.log(`not ok # ${test.title}`);
            default:
                console.log(`not ok # ${result.status} : ${test.title}`);
        }
    }
}

export default TapReporter;