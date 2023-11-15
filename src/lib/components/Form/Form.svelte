<script lang="ts">
  export let formId: string = "";
</script>

<form
  action="https://formspree.io/f/{formId}"
  method="post"
  class="grid grid-cols-1 gap-[22px]"
>
  <input type="text" name="name" placeholder="Your name *" required />
  <input
    type="email"
    name="email"
    placeholder="Your email address *"
    required
  />
  <input type="tel" name="phone" placeholder="Your phone number *" required />
  <textarea name="details" placeholder="Your message *" required />

  <input type="submit" value="Submit Enquiry" />
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
    @apply bg-blue text-white px-[30px] py-[5px] uppercase tracking-wide ml-auto;
  }
</style>
