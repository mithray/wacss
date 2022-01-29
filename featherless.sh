cat node_modules/feather-icons/dist/icons/external-link.svg \
  | sed 's|viewBox="[0-9]* [0-9]* [0-9]* [0-9]*"||' \
  | sed 's|stroke-width="[0-9]*"||' \
  | sed 's|stroke="currentColor"||' \
  | sed 's|fill="none"||' \
  | sed 's|width="[0-9]*"||' \
  | sed 's|height="[0-9]*"||' \
  | sed 's|stroke-linecap="[a-zA-Z]*"||' \
  | sed 's|stroke-linejoin="[a-zA-Z]*"||' \
  | sed 's|class="[a-zA-Z -]*"||' \
  | sed 's|xmlns="http://www.w3.org/2000/svg"||' \
  | sed 's|  *| |g' \
  | sed 's| >|>|g'
