<template>
    <el-row class="w-full">
        <div class="box-col-vertical-center gap-2 w-full" :class="className">
            <el-row class="w-full gap-1">
                <el-text class="text-blue70 text-regular">
                    {{ title }}
                </el-text>
                <el-text v-if="isRequired" class="text-red text-regular">
                    *
                </el-text>
            </el-row>
            <el-form-item class="w-full" :prop="prop">
                <!-- @vue-ignore -->
                <el-select class="w-full" v-model="selected" filterable remote reserve-keyword
                    :placeholder="placeHolder" @change="onChange" remote-show-suffix :remote-method="remoteMethod"
                    :loading="loading" style="width: 240px" :placement="'bottom-start'">
                    <el-option v-for="item in filtered" :key="item[key]" :label="item[label]" :value="item" />
                </el-select>
            </el-form-item>
        </div>
    </el-row>
</template>
<script lang="ts">
import { defineComponent, ref, PropType } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
    name: 'BaseTextInput',
    props: {
        value: {
            type: null as unknown as PropType<any> | PropType<null> | null | undefined | any,
            default: ''
        },
        prop: {
            default: ''
        },
        className: {
            type: null as unknown as PropType<any>,
            default: false
        },
        title: {
            type: String as PropType<string>,
            default: ''
        },
        isRequired: {
            type: Boolean as PropType<boolean>,
            default: false
        },
        placeHolder: {
            type: String as PropType<string>,
            default: ''
        },
        prefixImage: {
            type: String as PropType<string>,
            default: ''
        },
        options: {
            type: Array<any>,
            default: []
        },
        key: {
            type: String as PropType<string>,
            default: ''
        },
        label: {
            type: String as PropType<string>,
            default: ''
        },
        onChange: {
            type: Function as PropType<(val: any) => void>,
            default: undefined
        },
    },
    setup(props) {
        const { t, locale } = useI18n();
        return {
            t, locale, props
        };
    },
    data() {
        return {
            selected: null,
            loading: false,
            filtered: [] as any[]
        }
    },
    methods: {
        remoteMethod(query: string) {
            this.loading = true;
            setTimeout(() => {
                this.loading = false;
                this.filtered = this.options.filter((item) => {
                    return item[this.props.label].toLowerCase().includes(query.toLowerCase())
                })
            }, 100);
        }
    },
    mounted() {
        this.filtered = this.props.options;
        this.selected = this.props.value;
    },
    watch: {
        value: {
            handler(val) {
                this.selected = val;
            },
            immediate: true
        }
    }
});

</script>
<style lang="scss">
.el-select__selection {
    height: 31px;
}
</style>