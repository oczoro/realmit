const terminal = document.getElementById('terminal');
const command = document.getElementById('command');
const typing = document.getElementById('typing');

async function writeOutput(text, element, ms) {
  for (let i = 0; i < text.length; i++) {
    const letter = text[i];
    await new Promise((r) => setTimeout(r, ms));
    element.innerHTML += letter;
  }
}

async function main() {
  await new Promise((r) => setTimeout(r, 400));
  await writeOutput('Welcome friends!', terminal, 50);
  terminal.innerHTML += '<br>';
  command.style = '';
  await new Promise((r) => setTimeout(r, 500));


  await writeOutput('ls', typing, 100);
  terminal.innerHTML += typing.outerHTML;
  terminal.innerHTML += 
`<pre>
<span class="text-link">├── <a class="text-lime" href="/storage">Storage</a></span>
<span class="text-link">├── <a class="text-lime" href="/socials">Socials</a></span>
<span class="text-link">└── <a class="text-lime" href="/blog">Blog</a></span>

</pre>`;

  typing.innerHTML = '';
}

main();
