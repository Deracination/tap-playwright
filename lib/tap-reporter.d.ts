import { Reporter, TestCase, TestResult } from '@playwright/test/reporter';
/**
 * TAP (test-anything-protocol) reporter for Playwright tests
 * allows running and reporting tests via 'prove'
 */
declare class TapReporter implements Reporter {
    onBegin(_config: any, suite: any): void;
    onTestBegin(test: TestCase, result: TestResult): void;
    onTestEnd(test: TestCase, result: TestResult): void;
}
export default TapReporter;
