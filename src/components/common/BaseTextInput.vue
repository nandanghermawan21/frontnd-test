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
                <el-input :type="type" v-model="newValue" size="large" :placeholder="placeHolder"
                    :clearable="clearable"
                    :rows="rows" :disabled="disabled" :readonly="readonly" class="w-full" @input="onChange">
                    <template v-if="prefixImage" #prefix>
                        <img :src="prefixImage" alt="Edit" />
                    </template>
                </el-input>
                <el-text class="text-neutral40 text-extra-small">
                   {{ description }}
                </el-text>
            </el-form-item>
        </div>
    </el-row>
</template>
<script lang="ts">
import { defineComponent, ref, PropType } from 'vue';
import { useI18n } from 'vue-i18n';
import { title } from 'process';

export default defineComponent({
    name: 'BaseTextInput',
    props: {
        value: {
            type: String as PropType<string> | PropType<null> | null | undefined | any,
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
        onChange: {
            type: Function as PropType<(value: string) => any>,
            default: () => {}
        },
        type: {
            type: String as PropType<string>,
            default: 'text'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        rows: {
            type: Number,
            default: 1
        },
        description: {
            type: String,
            default: ''
        },
        clearable: {
            type: Boolean,
            default: false
        }
    },
    setup() {
        const { t, locale } = useI18n();
        return {
            t, locale
        };
    },
    data() {
        return {
            newValue: this.value
        };
    },
    watch: {
        value: {
            handler(val) {
                this.newValue = val;
            },
            immediate: true
        }
    },
});

</script>
<style lang="scss" scoped>
.default-style {
    background-color: white;
    color: black;
}

.new-style {
    background-color: lightblue;
    color: red;
}
</style>