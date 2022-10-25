<template>
    <!-- Author: FormBold Team -->
    <!-- Learn More: https://formbold.com -->
    <form action="https://formbold.com/s/FORM_ID" method="POST">
        <div class="mb-5">
            <label for="username" class="mb-3 block text-base font-medium text-[#07074D]">
                Username
            </label>
            <input type="text" name="username" id="username" placeholder="Username"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
        </div>
        <div class="mb-5">
            <label for="category" class="mb-3 block text-base font-medium text-[#07074D]">
                Category
            </label>
            <select
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                aria-label=".form-select-lg example">
                <option selected>Category</option>
                <option value="1">Data</option>
                <option value="2">Technical</option>
                <option value="3">Three</option>
            </select>
        </div>
        <div class="mb-5">
            <label for="title" class="mb-3 block text-base font-medium text-[#07074D]">
                Title
            </label>
            <input type="text" name="title" id="title" placeholder="title"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
        </div>
        <div class="mb-5">
            <label for="message" class="mb-3 block text-base font-medium text-[#07074D]">
                Message
            </label>
            <textarea rows="4" name="message" id="message" placeholder="Type your message"
                class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"></textarea>
        </div>
        <div>
            <button
                class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
                Submit
            </button>
        </div>
    </form>
</template>

<script>
export default {
    name: 'Form',
}
</script>