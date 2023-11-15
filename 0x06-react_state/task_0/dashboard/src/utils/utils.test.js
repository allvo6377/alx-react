import { StyleSheetTestUtils } from "aphrodite";
import { getFooterCopy, getFullYear, getLatestNotification } from "./utils"


describe('Test Functions utils', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  })

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  })

  it('Testing getFullYear', () => {
    expect(getFullYear()).toBe(new Date().getFullYear());
  })

  it('Testing getFooterCopy', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
  })

  it('Testing getLatestNotification', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
  })
})
