# Synchronize Chat Logs with UpStash
## Prerequisites
- GitHub account
- Your own ChatGPT-Next-Web server set up
- [UpStash](https://upstash.com)

## Troubleshooting GitHub Actions and UpStash Sync Issues

## Getting Started
1. Register for an UpStash account and set up GitHub Actions for ChatGPT-Next-Web.
2. Ensure that GitHub Actions is properly configured for ChatGPT-Next-Web deployment.

    ![Register and Login](./images/upstash-1.png)

    ![Create Database](./images/upstash-2.png)

    ![Select Server](./images/upstash-3.png)

3. Find the REST API and copy UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN (⚠Important⚠: Do not share your token!)

   ![Copy](./images/upstash-4.png)

4. Copy UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN into your synchronization configuration, then click **Check Availability**.

### Troubleshooting Steps for UpStash Sync

- **Step 1:** Check for Common Errors
  Look for common error messages in the UpStash synchronization logs. This will help pinpoint the source of the issue.
- **Step 2:** Verify REST API
  Ensure that the REST API provided by UpStash is correct and properly set in the synchronization configuration. Incorrect credentials can lead to synchronization failures.
- **Step 3:** Review Sync Logs
  Review the synchronization logs to identify specific errors or warnings that might provide insights into the root cause of the problem.
- **Step 4:** Seek Assistance
  If the issue persists, seek assistance from UpStash support or the community for guidance on resolving synchronization issues.

    ![Synchronize 1](./images/upstash-5.png)

    If everything is in order, you've successfully completed this step.

    ![Sync Availability Check Completed](./images/upstash-6.png)

5. Success!

   ![Great job~!](./images/upstash-7.png)