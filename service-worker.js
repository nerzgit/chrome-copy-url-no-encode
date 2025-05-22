chrome.commands.onCommand.addListener(async (command) => {
  if (command === "copy-japanese-url") {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tab && tab.url) {
      const decodedUrl = decodeURIComponent(tab.url);
      console.log("📎 Decoded URL:", decodedUrl);

      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: (text) => {
          navigator.clipboard.writeText(text);
        },
        args: [decodedUrl]
      });
    }
  }
});
