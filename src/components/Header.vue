<template>
    <header class="text-center bg-gray-900 text-white p-4 mb-10">
        <div class="text-3xl md:text-3xl font-bold mb-3">Dashboard</div>
    </header>
    <div class="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900">
        <div class="text-gray-100 text-xl">
            <div class="p-2.5 mt-1 flex items-center">
                <i class="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600"></i>
                <h1 class="font-bold text-gray-200 text-[15px] ml-3">Ticketing Helpdesk</h1>
            </div>
            <div class="my-2 bg-gray-600 h-[1px]"></div>
        </div>
        <div
            class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
            <router-link :to="{name: 'LookTicket'}">
                <i class="bi bi-bookmark-fill"></i>
                <span class="text-[15px] ml-4 text-gray-200 font-bold">Look Ticket</span>
            </router-link>
        </div>
        <div
            class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
            <router-link :to="{name: 'AddTicket'}">

                <i class="bi bi-house-door-fill"></i>
                <span class="text-[15px] ml-4 text-gray-200 font-bold">Add Ticket</span>
            </router-link>

        </div>
        <div class="my-4 bg-gray-600 h-[1px]"></div>

        <div
            class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
            <i class="bi bi-box-arrow-in-right"></i>
            <span class="text-[15px] ml-4 text-gray-200 font-bold">Logout</span>
        </div>
    </div>

</template>

<script>
export default {
    name: 'Header',
}
</script>