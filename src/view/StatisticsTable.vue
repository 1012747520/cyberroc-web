<template>
    <div class=" overflow-x-auto w-5/6 ml-10">
        <table class="table-fixed border-separate ml-18">
            <caption class="caption-top text-center text-grey-500 text-lg">
                配置一览表
            </caption>
            <thead>
                <tr>
                    <th class="border  border-slate-300 px-4 py-2  bg-gray-100">作业ID</th>
                    <th class="border  border-slate-300 px-4 py-2  bg-gray-100">应用系统代码</th>
                    <th class="border  border-slate-300 px-4 py-2  bg-gray-100">所属加工阶段</th>
                    <th class="border border-slate-300 px-4 py-2  bg-gray-100">处理频率属性</th>
                    <th class="border border-slate-300 px-4 py-2  bg-gray-100">处理日期</th>
                    <th class="border border-slate-300 px-4 py-2  bg-gray-100">源程序路径</th>
                    <th class="border border-slate-300 px-4 py-2  bg-gray-100">参数</th>
                    <th class="border border-slate-300 px-4 py-2  bg-gray-100">作业说明</th>
                    <th class="border border-slate-300 px-4 py-2  bg-gray-100">开发人</th>
                    <th class="border border-slate-300 px-4 py-2  bg-gray-100">数据日期延迟</th>
                    <th class="border border-slate-300 px-4 py-2  bg-gray-100">作业优先等级</th>
                    <th class="border border-slate-300 px-4 py-2  bg-gray-100">对后续作业影响度</th>
                    <th class="border border-slate-300 px-4 py-2  bg-gray-100">对前导作业日期要求</th>
                    <th class="border border-slate-300 px-4 py-2  bg-gray-100">重跑自动配置</th>
                    <th class="border border-slate-300 px-4 py-2  bg-gray-100">禁用标识</th>
                </tr>
            </thead>
            <tbody>
                <tr >
                    <td class="border  ">CORPDB.FAA_AW_QOS</td>
                    <td class="border  ">SKPSW</td>
                    <td class="border  ">1</td>
                    <td class="border  ">1</td>
                    <td class="border  ">1</td>
                    <td class="border  ">/opt/etlbat/dwsys/run/cal_spark2.4.3_sql_process_dymamic_main.sh</td>
                    <td class="border  ">{{param}}</td>
                    <td class="border  ">1</td>
                    <td class="border  ">1</td>
                    <td class="border  ">1</td>
                    <td class="border  ">1</td>
                    <td class="border  ">1</td>
                    <td class="border  ">1</td>
                    <td class="border  ">1</td>
                    <td class="border  ">1</td>
                </tr>  
                <tr>
                    <td class="border  ">CORPDB.ASD_DA_MX</td>
                    <td class="border  ">GP</td>
                    <td class="border  ">1</td>
                    <td class="border  ">1</td>
                    <td class="border  ">1</td>
                    <td class="border  ">/opt/etlbat/dwsys/run/cal_spark2.4.3_sql_process_dymamic_main.sh</td>
                    <td class="border  ">{{param}}</td>
                    <td class="border  ">1</td>
                    <td class="border  ">1</td>
                    <td class="border  ">1</td>
                    <td class="border  ">1</td>
                    <td class="border  ">1</td>
                    <td class="border  ">1</td>
                    <td class="border  ">1</td>
                    <td class="border  ">1</td>
                </tr>  
            </tbody>
        </table>
    </div> 
</template>

<script>
export default {
  data() {
    return {
        param:"<AC_DATE> ../proc/auditdb/AUDITDB.AUDITDB_R_DS20007.hql <ORAMIS_DBNAME> DG <MASK_CODE>"
    }
  }
}
</script>
