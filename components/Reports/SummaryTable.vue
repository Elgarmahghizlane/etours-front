<template >
  <div class="overflow-x-auto w-full max-h-[calc(100vh-(150px))] md:p-2">
    <table class="w-full">
      <!-- thead -->
      <thead class="sticky top-0 bg-[#E8E8E8]">
        <tr class="">
          <th class="px-2 border-r border-gray-500 text-sm font-light whitespace-nowrap text-center text-gray-600 ">
            Selling Date
          </th>
          <th class="px-2 text-sm font-light text-center border-gray-500 border-r  text-gray-600  whitespace-nowrap">
            Bookings (Occupancy Rate)
          </th>
          <th class="px-2 text-sm font-light text-center border-gray-500 border-r  text-gray-600 ">
            RevPAR
          </th>
          <th class="px-2 text-sm font-light text-center border-gray-500 border-r  text-gray-600  ">
            ADR
          </th>
          <th class="px-2 text-sm font-light text-center border-gray-500 border-r  text-gray-600 whitespace-nowrap">
            Room Charges Before Taxes
          </th>
          <th class="px-2 text-sm font-light text-center border-gray-500 border-r  text-gray-600 whitespace-nowrap ">
            All Charges <br>
            <span class="text-[12px] font-light">
              (including taxes)
            </span>
          </th>
          <th class="px-2 text-sm font-light text-center border-gray-500 border-r  text-gray-600 whitespace-nowrap">
            All Payments
          </th>
          <th class="px-2 text-sm font-light text-center  text-gray-600 ">
            Balance
          </th>
        </tr>
      </thead>
      <!-- tbody -->
      <tbody class="overflow-y-auto h-[calc(100vh-(160px))] bg-[#F4F4F4F4] rounded-xl">
        <tr v-for="(d, index) in dataTable" :key="index" class="px-2">
          <td class="border-gray-300 font-light text-center whitespace-nowrap text-sm ">
            {{ d.sellingDate }}
          </td>
          <td class="font-light text-center whitespace-nowrap text-sm ">
            {{ d.bookings }}
          </td>
          <td class="font-light text-center whitespace-nowrap text-sm ">
            {{ d.revPAR }}
          </td>
          <td class="border-gray-300 font-light text-center text-sm ">
            {{ d.ADR }}
          </td>
          <td class="border-gray-300 font-light text-center text-sm whitespace-nowrap ">
            {{ d.beforeTaxes }}
          </td>
          <td class="border-gray-300 font-light text-center text-sm ">
            {{ d.allCharges }}
          </td>
          <td class="border-gray-300 font-light text-center text-sm ">
            {{ d.allPayments }}
          </td>
          <td class="border-gray-300 font-light text-center text-sm ">
            {{ d.balance }}
          </td>
        </tr>
      </tbody>
      <tfoot class="overflow-y-auto sticky bottom-0 bg-[#F4F4F4] w-full">
        <tr class="bg-[#E8E8E8]">
            <td class=" px-2 py-1" v-for="(d, index) in total" :key="index">
              <div class="text-sm text-center" :class="{ 'font-bold': d === 'Total' }">
                <span class="">{{ d }}</span>
              </div>
            </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataTable: [
        {
          sellingDate: '2023-04-02 Sunday',
          bookings: '2 (22.2%)',
          revPAR: 0.00,
          ADR: 0.00,
          beforeTaxes: 0.00,
          allCharges: 0.00,
          allPayments: 0.00,
          balance: 0.00
        },
        {
          sellingDate: '2023-04-02 Sunday',
          bookings: '2 (22.2%)',
          revPAR: 0.00,
          ADR: 0.00,
          beforeTaxes: 0.00,
          allCharges: 0.00,
          allPayments: 0.00,
          balance: 0.00
        },
        {
          sellingDate: '2023-04-02 Sunday',
          bookings: '2 (22.2%)',
          revPAR: 0.00,
          ADR: 0.00,
          beforeTaxes: 0.00,
          allCharges: 0.00,
          allPayments: 0.00,
          balance: 0.00
        },
        {
          sellingDate: '2023-04-02 Sunday',
          bookings: '2 (22.2%)',
          revPAR: 0.00,
          ADR: 0.00,
          beforeTaxes: 0.00,
          allCharges: 0.00,
          allPayments: 0.00,
          balance: 0.00
        },
        {
          sellingDate: '2023-04-02 Sunday',
          bookings: '2 (22.2%)',
          revPAR: 0.00,
          ADR: 0.00,
          beforeTaxes: 0.00,
          allCharges: 0.00,
          allPayments: 0.00,
          balance: 0.00
        },
        {
          sellingDate: '2023-04-02 Sunday',
          bookings: '2 (22.2%)',
          revPAR: 0.00,
          ADR: 0.00,
          beforeTaxes: 0.00,
          allCharges: 0.00,
          allPayments: 0.00,
          balance: 0.00
        },
        {
          sellingDate: '2023-04-02 Sunday',
          bookings: '2 (22.2%)',
          revPAR: 0.00,
          ADR: 0.00,
          beforeTaxes: 0.00,
          allCharges: 0.00,
          allPayments: 0.00,
          balance: 0.00
        },
        {
          sellingDate: '2023-04-02 Sunday',
          bookings: '2 (22.2%)',
          revPAR: 0.00,
          ADR: 0.00,
          beforeTaxes: 0.00,
          allCharges: 0.00,
          allPayments: 0.00,
          balance: 0.00
        },
        {
          sellingDate: '2023-04-02 Sunday',
          bookings: '2 (22.2%)',
          revPAR: 0.00,
          ADR: 0.00,
          beforeTaxes: 0.00,
          allCharges: 0.00,
          allPayments: 0.00,
          balance: 0.00
        },
        {
          sellingDate: '2023-04-02 Sunday',
          bookings: '2 (22.2%)',
          revPAR: 0.00,
          ADR: 0.00,
          beforeTaxes: 0.00,
          allCharges: 0.00,
          allPayments: 0.00,
          balance: 0.00
        },

      ],
      total: ['Total', '0', '1', '2', '3', '4', '5', '6']
    }
  }

}
</script>

<style lang="scss" scoped></style>
