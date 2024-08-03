<template>
    <el-row>
        <el-col class="left-side hidden-sm-and-down" :span="18" :md="12" :lg="16">
            <img src="/company-logo.png" alt="Company Logo" class="company-logo" />
        </el-col>
        <el-col class="right-side" :span="6" :sm="24" :md="12" :xs="24" :lg="8">
            <el-row justify="space-between" class="p-2 align-center">
                <img src="/company-logo.png" alt="Company Logo" class="company-logo-small" />
                <div class="w-50 mt-5">
                    <BaseSelect :options="lang" key="id" label="name" :value="selectedLang" :prop="'lang'" :onChange="((val) => {
                        selectedLang = val;
                        setLang();
                    })">
                    </BaseSelect>
                </div>
            </el-row>
            <el-row class="align-center w-full p-5">
                <el-form ref="formLogin" :model="ruleFormLogin" :rules="rules" label-width="auto">
                    <el-row :gap="5">
                        <el-row class="w-full">
                            <el-text class="text-title">
                                {{ t('Signin Account') }}
                            </el-text>
                        </el-row>
                        <el-row class="w-full">
                            <BaseTextInput :value="ruleFormLogin.email" title="Email" :prop="'email'" :isRequired="true"
                                :onChange="(val) => {
                                    ruleFormLogin.email = val;
                                }" />
                        </el-row>
                        <el-row class="w-full">
                            <BaseTextInput type="password" :value="ruleFormLogin.password" title="Password"
                                :prop="'password'" :isRequired="true" :onChange="(val) => {
                                    ruleFormLogin.password = val;
                                }" />
                        </el-row>
                        <el-row class="w-full" justify="end">
                            <el-text class="text-regular">
                                <router-link to="/forgot-password">
                                    {{ t('Forgot Password') + "?" }}
                                </router-link>
                            </el-text>
                        </el-row>
                        <el-row class="w-full">
                            <el-button type="primary" class="h-44 border-blue50 pl-0 px-20 w-full" @click="submit()">
                                <el-text class="text-white text-regualar">
                                    {{ t('Login') }}
                                </el-text>
                            </el-button>
                        </el-row>
                    </el-row>
                </el-form>
            </el-row>
        </el-col>
    </el-row>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { BasicOptonsType } from '~/types/option';
import { laguageDummy } from '~/dummy/option';
import { ComponentSize, FormInstance, FormRules } from 'element-plus';
import { EmailLoginType } from '~/types/account';
import { validateEmail } from '~/utils/formValidation';
import { useI18n } from 'vue-i18n';
import router from '~/router';

export default defineComponent({
    setup() {
        const { t, locale } = useI18n()
        const formSize = ref<ComponentSize>('default')
        const formLogin = ref<FormInstance>()
        const ruleFormLogin = reactive<EmailLoginType>({
            email: '',
            password: '',
        });

        const validatePassword = (rule: any, value: any, callback: any) => {
            if (value.length < 6) {
                return callback(new Error(t('password must be at least 6 characters')));
            }
            callback();
        };

        const rules = reactive<FormRules<EmailLoginType>>({
            password: [
                { required: true, message: t('please fill password'), trigger: 'blur' },
                { validator: validatePassword, trigger: 'blur' },
            ],
            email: [
                { required: true, message: t('please fill email'), trigger: 'change' },
                { validator: (rule, value, callback) => validateEmail(rule, value, callback, t), trigger: 'blur' }
            ],
        })
        return {
            t,
            locale,
            formSize,
            formLogin,
            ruleFormLogin,
            rules,
        }
    },
    data() {
        return {
            lang: laguageDummy,
            selectedLang: null as BasicOptonsType | null,
        }
    },
    methods: {
        async submitForm(formEl: FormInstance | undefined, { onSuccess, onError }: { onSuccess?: () => void | null, onError?: () => void | null }) {
            if (!formEl) return
            await formEl.validate((valid, fields) => {
                if (valid) {
                    onSuccess && onSuccess()
                } else {
                    onError && onError()
                }
            })
        },
        submit() {
            this.submitForm(this.formLogin, {
                onSuccess: () => {
                    router.push('/home')
                },
                onError: () => {
                    console.log('error')
                }
            })
        },
        setLang() {
            localStorage.setItem(import.meta.env.VITE_APP_KEY + '_lang', this.selectedLang?.value || 'en')
            //apply lang
            this.locale = this.selectedLang?.value ?? 'en';
        }
    },
    mounted() {
        var currentLang = localStorage.getItem(import.meta.env.VITE_APP_KEY + '_lang')
        this.selectedLang = this.lang.find((item) => item.value === currentLang) || this.lang[0]
    }
})
</script>
<style lang="scss" scoped>
.left-side {
    height: 100vh;
    background-color: $background-color;
    display: flex;
    align-items: center;
    justify-content: center;
}

.company-logo {
    width: 70%;
}

.right-side {
    height: 100vh;
    background-color: $primary-color;
}

.company-logo-small {
    width: 25%;
    margin: 1em;
}
</style>