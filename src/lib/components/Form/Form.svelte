<script lang="ts">
  export let formId: string = "";

  let disabled = true;
  let nameEl: string;
  let emailEl: string;
  let phoneEl: string;
  let detailsEl: string;

  $: if (nameEl && emailEl && phoneEl && detailsEl) {
    disabled = false;
  }
</script>

<form
  action="https://formspree.io/f/{formId}"
  method="post"
  class="grid grid-cols-1 gap-[22px]"
>
  <input
    type="text"
    name="name"
    placeholder="Your name *"
    required
    bind:value={nameEl}
  />
  <input
    bind:value={emailEl}
    type="email"
    name="email"
    placeholder="Your email address *"
    required
  />
  <input
    bind:value={phoneEl}
    type="tel"
    name="phone"
    placeholder="Your phone number *"
    required
  />
  <textarea
    bind:value={detailsEl}
    name="details"
    placeholder="Your message *"
    required
  />

  <input type="submit" value="Submit Enquiry" {disabled} />
</form>

<style>
  input:not([type="submit"]),
  textarea {
    @apply bg-white py-6 px-[28px] text-blue w-full;

    &::placeholder {
      @apply text-blue;
    }
  }

  input[type="submit"] {
    @apply bg-blue text-white px-[30px] py-[5px] uppercase tracking-wide ml-auto cursor-pointer rounded-none;

    &:disabled {
      @apply opacity-50 cursor-default;
    }
  }
</style>
