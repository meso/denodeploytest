addEventListener("fetch", (event) => {
  const response = new Response("Hello World! from @meso", {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});
