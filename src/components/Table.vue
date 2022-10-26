<template>
    <h1 class="mb-3 block text-base text-4xl text-[#07074D]">All Tickets</h1>
    <table class="table-auto w-full">
        <thead>
            <tr class="bg-gray-900 text-center">
                <th class="
                           w-1/6
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           border-l border-transparent
                           ">
                    ID TICKETS
                </th>
                <th class="
                w-1/6
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           ">
                    Informer
                </th>
                <th class="
                w-1/6
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           border-l border-transparent
                           ">
                    Category
                </th>
                <th class="
                           w-1/6
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           ">
                    Title
                </th>
                <th class="
                           w-1/6
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           ">
                    Status
                </th>
                <th class="
                           w-1/6
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           border-r border-transparent
                           ">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="ticket in tickets" :key="ticket.id">
                <td class="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-[#F3F6FF]
                           border-b border-l border-[#E8E8E8]
                           ">
                    {{ticket.id}}
                </td>
                <td class="
                text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-white
                           border-b border-[#E8E8E8]
                           ">
                    {{ticket.informer}}

                </td>
                <td class="
                text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-[#F3F6FF]
                           border-b border-l border-[#E8E8E8]
                           ">
                           {{ticket.category}}

                </td>
                <td class="
                text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-white
                           border-b border-[#E8E8E8]
                           ">
                           {{ticket.title}}

                </td>
                <td class="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-[#F3F6FF]
                           border-b border-[#E8E8E8]
                           ">
                           {{ticket.status}}

                </td>
                <td class="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-white
                           border-b border-r border-[#E8E8E8]
                           ">
                    <a href="javascript:void(0)" class="
                              border border-primary
                              py-2
                              px-6
                              text-primary
                              inline-block
                              rounded
                              hover:bg-primary hover:text-white
                              " v-on:click="getById(ticket)">
                        Detail
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
</template>



<script>

import axios from 'axios'
export default {
    name: 'Table',
    data() {
        return { tickets: undefined }
    },
    headers: {
        "Access-Control-Allow-Origin": "*",
    },
    methods: {
        getTickets() {
            const URL = "http://127.0.0.1:8888/cust/gettickets"
            axios.get(URL).then(res => {
                console.log(res.data.datas)
                this.tickets = res.data.data
            })
        },
        getById: function (tickets) {
            const URL = "http://127.0.0.1:8888/cust/getTicket/"
        }
    },
    mounted() {
        this.getTickets();
        // console.log(tickets)
    }
}
</script>