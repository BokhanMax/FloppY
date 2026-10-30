<template>
  <RouterLink
    to="/"
    class="flex items-center gap-3 no-underline group"
    aria-label="FloppY — головна"
  >
    <span
      class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-on-accent transition-transform duration-200 group-hover:scale-105"
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M5 3h11l3 3v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
        <path d="M7 3v5h8V3" />
        <path d="M7 21v-7h10v7" />
      </svg>
    </span>
    <span class="flex flex-col leading-tight">
      <span class="text-xl font-bold tracking-tight text-fg">FloppY</span>
      <span class="hidden text-xs text-muted xs:block">Каталог програм для Windows</span>
    </span>
  </RouterLink>
</template>
