import { posts } from './posts.js';

const postsContainer = document.getElementById('posts-container');

for (let i = 0; i < posts.length; i++) {
  const post = posts[i];
  const sectionSelector = `section_${post.year}`;
  const section = document.getElementById(sectionSelector);
  if (section) {
    const sectionList = section.getElementsByTagName('UL')[0];
    const listItem = document.createElement('LI');
    listItem.innerHTML = `<a href="${post.link}" target="_blank">${post.day.toString().padStart(2, 0)}-${post.month
      .toString()
      .padStart(2, 0)}-${post.year} :: ${post.title}</a>`;
    sectionList.appendChild(listItem);
  } else {
    const newPostSection = document.createElement('DIV');
    newPostSection.id = sectionSelector;
    newPostSection.classList.add('posts-section');
    const sectionTitle = document.createElement('H2');
    sectionTitle.innerText = `${post.year}`;
    newPostSection.appendChild(sectionTitle);
    const sectionList = document.createElement('UL');
    const listItem = document.createElement('LI');
    listItem.innerHTML = `<a href="${post.link}" target="_blank">${post.day.toString().padStart(2, 0)}-${post.month
      .toString()
      .padStart(2, 0)}-${post.year} :: ${post.title}</a>`;
    sectionList.appendChild(listItem);
    newPostSection.appendChild(sectionList);
    postsContainer.appendChild(newPostSection);
  }
}