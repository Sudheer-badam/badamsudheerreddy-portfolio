import asyncio
import sys
from playwright.async_api import async_playwright

async def main():
    url = sys.argv[1] if len(sys.argv) > 1 else "https://dribbble.com/shots/25339060-Personal-Website-Design-for-a-Software-Engineer"
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        await page.goto(url)
        await page.wait_for_timeout(3000)
        await page.screenshot(path="dribbble_shot2.png", full_page=True)
        await browser.close()

asyncio.run(main())
