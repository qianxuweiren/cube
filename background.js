chrome.webRequest.onBeforeRequest.addListener(
  function(details) { 
    // console.log(details)
    return {cancel: true}; 
  },
  {urls: 
   ["https://www.facebook.com/*",
    "https://www.youtube.com/*",
    "https://ac.qq.com/*",
   ]
  },
  ["blocking"]
);
